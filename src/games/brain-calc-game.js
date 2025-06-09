import runGame from '../index.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']
const minNumber = 0
const maxNumber = 50

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const calculateValue = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2
    case '-': return number1 - number2
    case '*': return number1 * number2
  }
}

const generateGameRound = () => {
  const operator = operators[getRandomIndex(operators)]
  const number1 = getRandomNumber(minNumber, maxNumber)
  const number2 = getRandomNumber(minNumber, maxNumber)
  const question = `${number1} ${operator} ${number2}`
  const result = calculateValue(number1, number2, operator)

  const correctAnswer = String(result)

  return [question, correctAnswer]
}

const brainCalcGame = () => runGame(description, generateGameRound)

export default brainCalcGame
