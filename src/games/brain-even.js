import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const minNumber = 0
const maxNumber = 100

const isEven = number => number % 2 === 0

const generateGameRound = () => {
  const number = getRandomNumber(minNumber, maxNumber)
  const question = number
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const brainEvenGame = () => runGame(description, generateGameRound)

export default brainEvenGame
