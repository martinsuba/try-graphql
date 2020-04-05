import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';

import { root } from './resolver';

const typeDefs = importSchema('./schema.graphql');
const schema = buildSchema(typeDefs);

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'));
