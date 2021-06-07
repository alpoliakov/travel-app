import './env';
import 'reflect-metadata';

import nextApp from '@travel-app/app';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import createSchema from '../schema';
import createSession from '../session';

const handle = nextApp.getRequestHandler();

const port = process.env.PORT || 8000;

async function createServer() {
  try {
    await createSession();
    const app = express();

    const corsOptions = {
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

    await nextApp.prepare();
    app.get('*', (req, res) => handle(req, res));

    // start the server
    app.listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
