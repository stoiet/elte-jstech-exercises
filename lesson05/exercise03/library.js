import { items } from './sub-reddit-items';
import { comments } from './comments';
import { isNil } from 'ramda';
import { v4 } from 'uuid';

const MAX = 1000;
const MIN = 200;
const tokens = [];

const asyncResult = result => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(result); }, Math.floor(Math.random() * (MAX - MIN) + MIN));
  });
};

export const getSubRedditItems = () => {
  return asyncResult({ items });
};

export const subscribeTo = ({ id }) => {
  if (isNil(id)) { throw new Error('Missing id!'); }
  const token = v4(); tokens.push(token);
  return asyncResult({ token });
};

export const getCommentsOf = ({ id, token }) => {
  if (isNil(id)) { throw new Error('Missing id!'); }
  if (isNil(token)) { throw new Error('Missing token!'); }
  if (!tokens.includes(token)) { throw new Error('Wrong token!'); }
  return asyncResult({ comments: comments[id] });
};
