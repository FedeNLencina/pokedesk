export const getRandomNumber = (maxNumber: number) => {
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * maxNumber);
};
