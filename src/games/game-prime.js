import generateNumber from '../utils/generateNumber.js';
import defaultGame from './default-game.js';
import isPrime from '../utils/isPrime.js';

export default () => {
  defaultGame('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
    const num = generateNumber(1, 101);
    const answer = isPrime(num) ? 'yes' : 'no';
    return [num, answer];
  });
};
