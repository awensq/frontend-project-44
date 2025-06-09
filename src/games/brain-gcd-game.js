import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'
const minNumber = 1
const maxNumber = 100

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  if (!b) {
    return a
  }
  return gcd(b, a % b)
}

const generateGameRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber)
  const number2 = getRandomNumber(minNumber, maxNumber)
  const question = `${number1} ${number2}`
  const correctAnswer = String(gcd(number1, number2))

  return [question, correctAnswer]
}

const brainGCDGame = () => runGame(description, generateGameRound)

export default brainGCDGame
