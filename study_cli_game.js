#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'How well do you know me? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

//Learn this
async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playerName = answers.player_name;
  }
//😎
  //Learn this
  async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'What is my favorite animal?\n',
      choices: [
        'Dogs 🐶',
        'Guinea pigs 🐹',
        'Rabbits🐰',
        'Cats 🐱',
      ],
    });
  
    return handleAnswer(answers.question_1 === 'Rabbits🐰');
  }
//😋
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is my favorite Marvel character?\n',
      choices: [
        'Wolverine🦡',
        'Spiderman🕷',
        'Deadpool💀',
        'Iron Man 🤖',
      ],
    });
  
    return handleAnswer(answers.question_2 === 'Deadpool💀');
  }

  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: 'What is my favorite ice cream flavor?\n',
      choices: [
        'Vanilla🍦',
        'Chocolate🍫',
        'Strawberry🍓',
        'Lemon🍋',
      ],
    });
  
    return handleAnswer(answers.question_3 === 'Vanilla🍦');
  }

  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'What is my favorite video game mascot?\n',
      choices: [
        'Mario🔴',
        'Crash🦊',
        'Sonic🦔',
        'Mega man🤖',
      ],
    });
  
    return handleAnswer(answers.question_4 === 'Sonic🦔');
  }

  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: 'What is my all time favorite anime?\n',
      choices: [
        'Rurouni kenshin⚔',
        'Evangelion👾',
        'Digimon🦖',
        'Full metal alchemist🦾',
      ],
    });
  
    return handleAnswer(answers.question_5 === 'Sonic🦔');
  }


 
  async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  //learn this
    if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
      spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
      process.exit(1);
    }
  }
//🥱
  //learn this
  function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');

      console.log(
        chalk.blue(
          `GAMBARE GAMBARE!`
        )
      );
  
      process.exit(0);
    });
  }
//🤗

//learn this
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();
