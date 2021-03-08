import './env';
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import createSchema from '../schema';
import createSession from '../session';

const port = process.env.PORT || 8000;

async function createServer() {
  try {
    await createSession();
    const app = express();

    const corsOptions = {
      origin: 'http://localhost:3000',
      credentials: true,
    };
    app.use(cors(corsOptions));

    app.use(express.json());

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,

      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    });

    apolloServer.applyMiddleware({ app, cors: corsOptions });

    // start the server
    app.listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
