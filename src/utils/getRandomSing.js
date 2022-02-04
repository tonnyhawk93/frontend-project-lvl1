import generateNumber from './generateNumber.js';

export default (arrSings = ['+', '-', '*']) => arrSings[generateNumber(0, arrSings.length - 1)];
