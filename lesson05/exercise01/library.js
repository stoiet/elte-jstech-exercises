import { items } from './sub-reddit-items';
import { comments } from './comments';
import { isNil } from 'ramda';
import { v4 } from 'uuid';

const MAX = 1000;
const MIN = 200;
const tokens = [];

const asyncStatement = callback => {
  setTimeout(callback, Math.floor(Math.random() * (MAX - MIN) + MIN));
};

export const getSubRedditItems = callback => {
  if (isNil(callback)) { throw new Error('Missing callback!'); }
  asyncStatement(() => callback(items));
};

export const subscribeTo = ({ id }, callback) => {
  if (isNil(id)) { throw new Error('Missing id!'); }
  if (isNil(callback)) { throw new Error('Missing callback!'); }
  const token = v4(); tokens.push(token);
  asyncStatement(() => callback({ token }));
};

export const getCommentsOf = ({ id, token }, callback) => {
  if (isNil(id)) { throw new Error('Missing id!'); }
  if (isNil(token)) { throw new Error('Missing token!'); }
  if (isNil(callback)) { throw new Error('Missing callback!'); }
  if (!tokens.includes(token)) { throw new Error('Wrong token!'); }
  asyncStatement(() => callback({ comments: comments[id] }));
};
