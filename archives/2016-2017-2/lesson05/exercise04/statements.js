
const MAX = 1000;
const MIN = 200;

export const asyncStatement = callback => {
  return new Promise(resolve => {
    setTimeout(() => { callback(); resolve(); }, Math.floor(Math.random() * (MAX - MIN) + MIN));
  });
};
