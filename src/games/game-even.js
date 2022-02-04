import defaultGame from './default-game.js';
import generateNumber from '../utils/generateNumber.js';
import isEven from '../utils/isEven.js';

export default () => {
  defaultGame(
    'Answer "yes" if the number is even, otherwise answer "no"',
    () => {
      const num = generateNumber();
      const answer = isEven(num) ? 'yes' : 'no';
      return [num, answer];
    },
  );
};
