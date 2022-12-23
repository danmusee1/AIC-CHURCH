const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const { buildSchema } = require('graphql');
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
  fields: {
    
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLNonNull(GraphQLString) },
    date_of_birth: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    zip: { type: GraphQLNonNull(GraphQLString) },
    membership_date: { type: GraphQLNonNull(GraphQLString) },
    parent_id: { type: GraphQLNonNull(GraphQLString) }
  }
});


// Define root GraphQL resolvers
const root = {
  members: async () => {
    const result = await pool.query('SELECT * FROM members');
    return result.rows;
  },
  member: async ({ id }) => {
    const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
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
  event: async ({ id }) => {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
    return result.rows[0];
  },
  attendance: async ({ eventId }) => {
    const result = await pool.query(
      'SELECT * FROM attendance WHERE event_id = $1',
      [eventId]
    );
    return result.rows;
  },
  createMember: async ({  first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id }) => {
    const result = await pool.query(
      'INSERT INTO members (first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id ) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *',
      [first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id ]
    );
    return result.rows[0];
  },
  updateMember: async ({ id, first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id }) => {
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
    query += ` ${values.join(', ')} WHERE id = ${id} RETURNING *`;
    const result = await pool.query(query);
    return result.rows[0];
  },
  deleteMember: async ({ id }) =>{
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [
      id,
    ]);
    return result.rows[0];
  },
}


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      member: {
        type: MemberType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (_, { id }, context, info) => {
          // fetch member with the given id from the database
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createMember: {
        type: MemberType,
        args: {
          
          first_name: { type: GraphQLString },
          last_name: { type: GraphQLNonNull(GraphQLString) },
          date_of_birth: { type: GraphQLNonNull(GraphQLString) },
          phone: { type: GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLNonNull(GraphQLString) },
          address: { type: GraphQLNonNull(GraphQLString) },
          city: { type: GraphQLNonNull(GraphQLString) },
          state: { type: GraphQLNonNull(GraphQLString) },
          zip: { type: GraphQLNonNull(GraphQLString) },
          membership_date: { type: GraphQLNonNull(GraphQLString) },
          parent_id: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: root.createMember
      }
    }
  })
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL server running on http://localhost:4000/graphql');
});