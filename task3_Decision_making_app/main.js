'use strict';

//Decision making task
/* - Define a variable named `userName` and set its value to an empty string.
-Make condition which checks the value of userNameand returns ”Hello, userName” if there is name and it returns just “Hello” when it is empty string
-Create variable userQuestionand assign a string which represent the question user ask. 
-Log user name and question in console
-Generate a random number from 1-10 and store that value in variable randomNumber
-Create a variable decicionStatements which holds cases for each random number (1-10)
-Log in the console the answer to the question */

// function gives random answer to random questions
/* const randonQuestion = () => {
    const userName = prompt("What's your name?");

  if (userName.length > 0) {
    console.log("Hello,", userName);
  } else {
    console.log("Hello");
  }

  let userQuestion = prompt("What do you want to know? Type your question");
  console.log(`${userName} asks, - ${userQuestion}`);

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);

  let decicionStatements = randomNumber;
  switch (decicionStatements) {
    case 1:
      console.log("The stars say yes, go for it!");
      break;
    case 2:
      console.log("Trust your instincts and take the leap.");
      break;
    case 3:
      console.log("Hmm, better try again later.");
      break;
    case 4:
      console.log("Consider all options before making a move.");
      break;
    case 5:
      console.log("Outlook is bright, proceed with confidence.");
      break;
    case 6:
      console.log("Seek advice from a trusted friend before deciding.");
      break;
    case 7:
      console.log("Signs point to unexpected opportunities.");
      break;
    case 8:
      console.log("It's a toss-up, make a choice and see what happens.");
      break;

    case 9:
      console.log("Take a step back and reassess before moving forward.");
      break;
    case 10:
      console.log("Not the right time, patience will bring better results.");
      break;
    default:
      return 0;
  }
};

randonQuestion(); */

// solution_1 with onclick (needs to add onclick=function_name() in HTML)

/* const randomAnswer = () => {
  const question = document.querySelector("#question").value;
  const answer = document.querySelector("#answer");

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (question) {
    let decicionStatements = randomNumber;
    switch (decicionStatements) {
      case 1:
        answer.textContent = "The stars say yes, go for it!";
        break;
      case 2:
        answer.textContent = "Trust your instincts and take the leap.";
        break;
      case 3:
        answer.textContent = "Hmm, better try again later.";
        break;
      case 4:
        answer.textContent = "Consider all options before making a move.";
        break;
      case 5:
        answer.textContent = "Outlook is bright, proceed with confidence.";
        break;
      case 6:
        answer.textContent =
          "Seek advice from a trusted friend before deciding.";
        break;
      case 7:
        answer.textContent = "Signs point to unexpected opportunities.";
        break;
      case 8:
        answer.textContent =
          "It's a toss-up, make a choice and see what happens.";
        break;
      case 9:
        answer.textContent =
          "Take a step back and reassess before moving forward.";
        break;
      case 10:
        answer.textContent =
          "Not the right time, patience will bring better results.";
        break;
    }
  } else {
    answer.textContent = "Please enter your question";
  }
}; */

// solution_2 with addEventListener(needs to add id="answer" in HTML)

// 1) select the element where you want the Event happen
// 2) add addEventListener() - which is the method
// 3) in addEventListener("click") - send a type of event
// 4) write a function as a 2nd argument of addEventListener() - to specify what to do as the Event happens

let randomNumber = Math.floor(Math.random() * 10) + 1;

document.querySelector('.btn').addEventListener('click', function () {
  let name = document.querySelector('#firstName').value;
  let question = document.querySelector('#question').value;
  let answer = document.querySelector('#answer');

  let answerText;
  let greeting;

  /* When a person has 1 question */
  // or condition can be set - "if (question)" or "if (!question)
  if (question.length > 0) {
    console.log(`first ${randomNumber}`);
    switch (randomNumber) {
      case 1:
        answerText = 'The stars say yes, go for it!';
        break;
      case 2:
        answerText = 'Trust your instincts and take the leap.';
        break;
      case 3:
        answerText = 'Hmm, better try again later.';
        break;
      case 4:
        answerText = 'Consider all options before making a move.';
        break;
      case 5:
        answerText = 'Outlook is bright, proceed with confidence.';
        break;
      case 6:
        answerText = 'Seek advice from a trusted friend before deciding.';
        break;
      case 7:
        answerText = 'Signs point to unexpected opportunities.';
        break;
      case 8:
        answerText = "It's a toss-up, make a choice and see what happens.";
        break;
      case 9:
        answerText = 'Take a step back and reassess before moving forward.';
        break;
      case 10:
        answerText = 'Not the right time, patience will bring better results.';
        break;
    }
    // no input question
  } else {
    answerText = 'Please enter your question first❗️';
  }

  if (name.length > 0) {
    name = name.toUpperCase();
    greeting = `Hello, ${name}.`;
    answer.textContent = `${greeting} ${answerText}`;
    answer.style.color = '#503b2e';
    answer.style.fontFamily = 'Permanent Marker, cursive';
    answer.style.fontSize = '18px';
    answer.style.lineHeight = '1.7';
  } else {
    greeting = 'Hello.';
    answer.textContent = `${greeting} ${answerText}`;
    answer.style.color = '#503b2e';
    answer.style.fontFamily = 'Permanent Marker, cursive';
    answer.style.fontSize = '18px';
    answer.style.lineHeight = '1.7';
  }
});
/* When a person has several questions - use Ask btn */
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector('#question').value = '';

  answer.textContent = "Here you'll see the answer";
  answer.style.fontFamily = 'Kanit';
  answer.style.color = '#0363a3';
});
