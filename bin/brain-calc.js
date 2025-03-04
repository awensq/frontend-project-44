import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomExpression() {
    const operators = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    return { expression: `${num1} ${operator} ${num2}`, operator, num1, num2 };
}

function calculateResult(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
    }
}

function askQuestion(name, correctAnswersCount) {
    if (correctAnswersCount === 3) {
        console.log(`Congratulations, ${name}!`);
        rl.close();
        return;
    }

    const { expression, operator, num1, num2 } = getRandomExpression();
    console.log(`Question: ${expression}`);
    rl.question('Your answer: ', (userAnswer) => {
        const correctAnswer = calculateResult(num1, num2, operator).toString();

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            rl.close();
        } else {
            console.log('Correct!');
            askQuestion(name, correctAnswersCount + 1);
        }
    });
}

function startGame() {
    console.log("Welcome to the Brain Games!");
    rl.question("May I have your name? ", (name) => {
        console.log(`Hello, ${name}!`);
        console.log('What is the result of the expression?');
        askQuestion(name, 0);
    });
}

startGame();