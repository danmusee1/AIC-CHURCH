const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const pg = require('pg');

const port = 3000;

// Connect to PostgreSQL database
const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'MOZNE2R4KI',
  port: 5432,
});

// Define the GraphQL schema
const schema = buildSchema(`
  type Query {
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: Int!, name: String, email: String): User
    deleteUser(id: Int!): User
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`);

// Define root GraphQL resolvers
const root = {
  users: async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  },
  user: async ({ id }) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  },
  createUser: async ({ name, email }) => {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },
  updateUser: async ({ id, name, email }) => {
    let query = 'UPDATE users SET ';
    const values = [];
    if (name) {
      query += 'name = $2';
      values.push(name);
    }
    if (email) {
      if (values.length > 0) {
        query += ', ';
      }
      query += 'email = $' + (values.length + 2);
      values.push(email);
    }
    query += ' WHERE id = $1 RETURNING *';
    values.unshift(id);
    const result = await pool.query(query, values);
    return result.rows[0];
  },
  deleteUser: async ({ id }) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [
      id,
    ]);
    return result.rows[0];
  },
};

// Create an Express server and a GraphQL endpoint
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
