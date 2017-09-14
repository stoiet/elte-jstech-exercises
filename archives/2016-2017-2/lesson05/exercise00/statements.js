
const MAX = 1000;
const MIN = 200;

export const syncStatement = callback => {
  callback();
};

export const slowStatement = callback => {
  for (let i = 0, array = []; i < 80000; i++) { array = array.concat([i]); }
  callback();
};

export const asyncStatement = callback => {
  setTimeout(callback, Math.floor(Math.random() * (MAX - MIN) + MIN));
};
