import * as jwt from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';

import { MyContext } from '../types/MyContext';

const APP_SECRET = process.env.SESSION_SECRET || 'dxH4aLyK8r1zq6xf';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  try {
    const token = authorization?.replace('Bearer ', '');
    let user = null;

    if (token != null) {
      user = jwt.verify(token, APP_SECRET) as any;
    }

    context.res.locals.userId = user.id;
    return next();
  } catch (err) {
    throw new Error(err.message);
  }
};
