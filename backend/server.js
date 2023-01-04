const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./src/schema');
const root = require('./src/resolvers');

const app = express();

// Enable CORS
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL server running on http://localhost:4000/graphql');
});
