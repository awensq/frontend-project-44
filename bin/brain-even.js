import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function isEven(num) {
    return num % 2 === 0;
}

function askQuestion(name, correctAnswersCount) {
    if (correctAnswersCount === 3) {
        console.log(`Congratulations, ${name}!`);
        rl.close();
        return;
    }

    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    rl.question('Your answer: ', (userAnswer) => {
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer.toLowerCase() !== correctAnswer) {
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
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        askQuestion(name, 0);
    });
}

startGame();