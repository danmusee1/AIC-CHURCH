const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { Kind } = require('graphql/language');
const app = express();
const { buildSchema, GraphQLList } = require('graphql');
const { GraphQLSchema,GraphQLObjectType,GraphQLInt, GraphQLString,GraphQLScalarType } = require('graphql');
const { GraphQLNonNull } = require('graphql');

const pg = require('pg');
//const schema = require('./src/schema');

// Connect to PostgreSQL database
const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'church',
  password: 'MOZNE2R4KI',
  port: 5432,
});
const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A date value in the format yyyy-mm-dd',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString().slice(0, 10);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  }
});


const MemberType = new GraphQLObjectType({
  name: 'Member',
  description:"This represents a member of the church.",
  fields:() => ({
    member_id:{type:GraphQLInt},
    first_name: { type: GraphQLNonNull(GraphQLString) },
    last_name: { type: GraphQLNonNull(GraphQLString) },
    date_of_birth: { type: GraphQLNonNull(GraphQLDate) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    zip: { type:GraphQLNonNull(GraphQLString) },
    membership_date: { type:GraphQLNonNull(GraphQLDate) },
    parent_id: { type: GraphQLInt }
  })
});


// Define root GraphQL resolvers
const root = {
  members: async () => {
    const result = await pool.query('SELECT * FROM members');
    return result.rows;
  },
  member: async ({ member_id}) => {
    const result = await pool.query('SELECT * FROM members WHERE member_id=$1 ', [member_id]);
    return result.rows[0];
  },
  groups: async () => {
    const result = await pool.query('SELECT * FROM groups');
    return result.rows;
  },
  group: async ({ id }) => {
    const result = await pool.query('SELECT * FROM groups WHERE id = $1', [id]);
    return result.rows[0];
  },
  groupMembers: async ({ groupId }) => {
    const result = await pool.query(
      'SELECT m.* FROM members m INNER JOIN group_members gm ON m.id = gm.member_id WHERE gm.group_id = $1',
      [groupId]
    );
    return result.rows;
  },
  giving: async ({ memberId }) => {
    if (memberId) {
      const result = await pool.query(
        'SELECT * FROM giving WHERE member_id = $1',
        [memberId]
      );
      return result.rows;
    } else {
      const result = await pool.query('SELECT * FROM giving');
      return result.rows;
    }
  },
  events: async () => {
    const result = await pool.query('SELECT * FROM events');
    return result.rows;
  },
  event: async ({ member_id }) => {
    const result = await pool.query('SELECT * FROM events WHERE member_id = $1', [1]);
    return result.rows[0];
  },
  attendance: async ({ eventId }) => {
    const result = await pool.query(
      'SELECT * FROM attendance WHERE event_id = $1',
      [eventId]
    );
    return result.rows;
  },
  createMember: async ({ member_id,first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id  }) => {
    const result = await pool.query(
      'INSERT INTO members (member_id ,first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *',
      [member_id,first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id  ]
    );
    return result.rows[0];
  },
  updateMember: async ({ member_id, first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id }) => {
    const query = 'UPDATE members SET';
    const values = [];
    if (first_name) {
      values.push(`first_name = '${first_name}'`);
    }
    if (last_name) {
      values.push(`last_name = '${last_name}'`);
    }
    if (date_of_birth) {
      values.push(`date_of_birth = '${date_of_birth}'`);
    }
    if (phone) {
      values.push(`phone = '${phone}'`);
    }
    if (email) {
      values.push(`email = '${email}'`);
    }
    if (address) {
      values.push(`address = '${address}'`);
    }
    if (city) {
      values.push(`city = '${city}'`);
    }
    if (state) {
      values.push(`state = '${state}'`);
    }
    if (zip) {
      values.push(`zip = '${zip}'`);
    }
    if (membership_date) {
      values.push(`membership_date = '${membership_date}'`);
    }
    if (parent_id) {
      values.push(`parent_id = '${parent_id}'`);
    }
    query += ` ${values.join(', ')} WHERE member_id = ${member_id} RETURNING *`;
    const result = await pool.query(query);
    return result.rows[0];
  },
  deleteMember: async ({ member_id }) =>{
    const result = await pool.query('DELETE FROM members WHERE member_id = $1 RETURNING *', [
      member_id,
    ]);
    return result.rows[0];
  },
}

const RootQueryType= new GraphQLObjectType({
  name: 'Query',
  fields: () =>({
    members: {
      type:new GraphQLList(MemberType) ,
      description:"LIST OF ALL MEMBERS",
     resolve:root.members
    },
    member: {
      type:MemberType ,
      description:"A single member",
    
      args:{
        member_id:{type: GraphQLInt}
      },
      resolve: (_, { member_id },await, context, info) => {
        // fetch member with the given id from the database
        const result =  pool.query('SELECT * FROM members WHERE member_id=$1 ', [member_id]);
        return result.rows[0];
      }

     
     
    },
  })
})
   
  
  const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description:"Root Mutation",
    resolve: root.createMember,
    fields: () =>( {
      createMember: {
        type: MemberType,
        description:"Add a new member",
        args: {
          member_id:{type: GraphQLInt},
          first_name: { type: GraphQLNonNull(GraphQLString) },
    last_name: { type: GraphQLNonNull(GraphQLString) },
    date_of_birth: { type: GraphQLNonNull(GraphQLDate) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    zip: { type:GraphQLNonNull(GraphQLString) },
    membership_date: { type:GraphQLNonNull(GraphQLDate) },
    parent_id: { type: GraphQLInt }
        },
       
      },
      deleteMember:{
        type:MemberType,
        description:"remove a Member",
        resolve:root.deleteMember,
        args:{
          member_id:{
            type:new GraphQLNonNull(GraphQLInt)
          },
         
        }
      },
      updateMember:{
        type:MemberType,
        description:'update a member',
        args: {
          member_id:{type: GraphQLInt},
          first_name: { type: GraphQLNonNull(GraphQLString) },
  
        },
        resolve:root.updateMember

      }
    })
  })

 

  const schema=new GraphQLSchema({
    query:RootQueryType,
    mutation:RootMutationType
   })

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL server running on http://localhost:4000/graphql');
});