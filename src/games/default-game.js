import readLineSync from 'readline-sync';
import { askName, showWelcomeMessage } from '../cli.js';

export default (task, getQuestionWithAnswer, rounds = 3) => {
  showWelcomeMessage();
  const name = askName();
  console.log(task);
  let counter = 0;
  while (counter < rounds) {
    const [question, realAnswer] = getQuestionWithAnswer();
    const userAnswer = readLineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === String(realAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
