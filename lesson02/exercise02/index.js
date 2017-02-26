
const keys = Object.keys;
const assign = Object.assign;

export const invertObject = obj => {
  return keys(obj).reduce((result, key) => assign(result, { [obj[key]]: key }), {});
};
