import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';
import { prime } from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = prime(number);
  const correctAnswer = question ? 'yes' : 'no';
  return [number, correctAnswer.toString()];
};

export default () => runGame(description, generateRound);

