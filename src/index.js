import readlineSync from 'readline-sync'

const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(gameDescription)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
