import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'
import { gcd } from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
    const first_number = getRandomNumber(1, 100)
    const second_number = getRandomNumber(1, 100)
    const question = `${first_number} ${second_number}`
    const correctAnswer = gcd (first_number, second_number)
    return [question.toString(), correctAnswer.toString()]
}
    
  
  export default () => runGame(description, generateRound)
