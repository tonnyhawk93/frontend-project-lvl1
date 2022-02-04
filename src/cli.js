import readLineSync from 'readline-sync';

export const showWelcomeMessage = () => {
    console.log('Welcome to the Brain Games!');
}

export const askName = () => {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}