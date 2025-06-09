import runGame from '../index.js'

const description = 'What number is missing in the progression?'
const minNumber = 5
const maxNumber = 9

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomIndex = data => Math.floor(Math.random() * data.length)

const getProgression = (start, step, length) => {
  const progressionArray = []
  for (let i = 0; i <= length; i += 1) {
    progressionArray.push(start + i * step)
  }

  return progressionArray
}

const generateGameRound = () => {
  const start = getRandomNumber(minNumber, maxNumber)
  const step = getRandomNumber(minNumber, maxNumber)
  const length = getRandomNumber(minNumber, maxNumber)
  const progression = getProgression(start, step, length)
  const index = getRandomIndex(progression)
  const searchElement = progression[index]
  progression[index] = '..'
  const question = progression.join(' ')
  const correctAnswer = String(searchElement)

  return [question, correctAnswer]
}

export default () => {
  runGame(description, generateGameRound)
}
