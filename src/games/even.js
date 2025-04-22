/* eslint-disable no-unused-vars */
import runGame from '../index.js';
import { getRamdomNumber } from '../helper.js';

const isEven = (num) => num % 2 === 0; // true or false

const description = 'Answer "yes" if the number is even, otherwise answer "no"'

const getQuestionAndAnswer = () => {
 const question = getRamdomNumber (1, 9);
 const correctAnswer = isEven(question) ? 'yes' : 'no';
 return [question, correctAnswer, description]
}

export default () => {
    runGame()
}