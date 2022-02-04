import readLineSync from 'readline-sync';

const generateNumber = (from = 0, to = 100) => {
    return from - 1 + Math.ceil((Math.random() * (to - from + 1)))
}

const isEven = (num) => {
    return num % 2 === 0;
}

export const gameEven = (name = 'Guest') => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    let counter = 0;
    const times = 3;
    while (counter < times) {
        const num = generateNumber();
        const userAnswer = readLineSync.question(`Question: ${num}\n`);
        console.log(`Your answer: ${userAnswer}`);
        const realAnswer = isEven(num) ? 'yes' : 'no';
        if (userAnswer === realAnswer) {
            console.log('Correct!');
            counter += 1;
        }else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
            return
        }
    }
    console.log(`Congratulations, ${name}!`);
}