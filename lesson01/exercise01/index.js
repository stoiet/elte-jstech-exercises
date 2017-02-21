
export const reverseNumber = number => {
  return parseInt(
    number
      .toString()
      .split('')
      .reverse()
      .join('')
  );
};

