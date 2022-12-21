const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const schema = require("./src/schema");

const resolvers = { hello: () => 'Hello world!' };

const app= express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));
const cors= require("cors");
app.use(cors());
app.use(express.json());

module.exports = app;