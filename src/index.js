import readlineSync from 'readline-sync';
import correctAnswer from './games/even';
import description from './games/even';

const countRound = 3;

export default () => {
   console.log('Welcome to the Brain Games!');

   const name = readlineSync.question('May I have your name? ');
   console.log(`Hello, ${name}!`);

   console.log(`${description}`);

   for (let i = 0; i < countRound; i++)
   console.log('Question: ');

   const userAnswer  = readlineSync.question('Your answer: ');

   if (userAnswer === correctAnswer) {
    console.log('Correct!');
   } else {
    console.log(userAnswer + 'is wrong answer ;(. Correct answer was' + correctAnswer);
    console.log(`Let's try again, ${name}!`)
    return;
   }

   console.log(`Congratulations, ${name}!`);
}