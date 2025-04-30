import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'
import { progression } from '../helper.js'

const description = 'What number is missing in the progression?'

const generateRound = () => {
    const startLimit = getRandomNumber(1, 100)
    const stepLimit = getRandomNumber(1, 100)
    const lenghtLimit = getRandomNumber(5, 20)
    const newProgression = progression(startLimit, stepLimit, lenghtLimit)
    const question = newProgression.progression
    const correctAnswer = newProgression.hiddenNumber
    return [question.toString(), correctAnswer.toString(), startLimit, stepLimit, lenghtLimit]
}
    
  
  export default () => runGame(description, generateRound)
