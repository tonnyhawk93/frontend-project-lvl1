import defaultGame from './default-game.js';
import generateNumber from '../utils/generateNumber.js';

export default () => {
  defaultGame(
    'What number is missing in the progression?',
    () => {
      const count = 10;
      let member = generateNumber(0, 10);
      const progression = [member];
      const next = generateNumber(1, 10);
      const questionIndex = generateNumber(1, count - 1);
      let answer;
      for (let i = 1; i < count; i += 1) {
        member += next;
        if (i !== questionIndex) {
          progression.push(member);
        } else {
          answer = member;
          progression.push('..');
        }
      }
      return [progression.join(' '), answer];
    },
  );
};
