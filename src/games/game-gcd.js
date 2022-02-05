import defaultGame from './default-game.js';
import generateNumber from '../utils/generateNumber.js';
import findNod from '../utils/findNod.js';

export default () => {
  defaultGame(
    'Find the greatest common divisor of given numbers.',
    () => {
      const a = generateNumber(1, 30);
      const b = generateNumber(1, 30);
      return [`${a} ${b}`, findNod(a, b)];
    },
  );
};
