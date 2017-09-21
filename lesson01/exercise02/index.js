import { object } from './object';

export const invertObject = obj => {
  const valueKeys = Object
    .keys(obj)
    .map(key => ({ [obj[key]]: key }));

  return Object.assign({}, ...valueKeys);
};
