import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';
import { getRandomOperator } from '../helper.js';

const description = 'What is the result of the expression?'

const generateRound = () => {
  const digit_first = getRandomNumber(1, 100);
  const digit_second = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${digit_first} ${operator} ${digit_second}`;
  
  const correctAnswer = eval(question);
  return [question, correctAnswer.toString()];
};

export default () => runGame(description, generateRound);