
export const reverseNumber = num => {
  return parseInt(
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  );
};
