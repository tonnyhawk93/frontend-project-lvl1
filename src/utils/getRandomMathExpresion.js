import generateNumber from './generateNumber.js';
import getRandomSing from './getRandomSing.js';

export default () => {
  const a = generateNumber();
  const b = generateNumber();
  const sing = getRandomSing();
  let answer;
  switch (sing) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      break;
  }
  return [`${a} ${sing} ${b}`, answer];
};
