import defaultGame from './default-game.js';
import getRandomMathExpresionWithAnswer from '../utils/getRandomMathExpresion.js';

export default () => {
  defaultGame(
    'What is the result of the expression?',
    getRandomMathExpresionWithAnswer,
  );
};
