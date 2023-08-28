
"use strict";

//Decision making task
/* - Define a variable named `userName` and set its value to an empty string.
-Make condition which checks the value of userNameand returns ”Hello, userName” if there is name and it returns just “Hello” when it is empty string
-Create variable userQuestionand assign a string which represent the question user ask. 
-Log user name and question in console */

/* -Generate a random number from 1-10 and store that value in variable randomNumber
-Create a variable decicionStatements which holds cases for each random number (1-10)
-Log in the console the answer to the question */

const randonQuestion = () => {
  const userName = prompt("What's your name?");

  if (userName.length > 0) {
    console.log("Hello,", userName);
  } else {
    console.log("Hello");
  }

  let userQuestion = prompt("What do you want to know? Type your question");
  console.log(`${userName} asks, - ${userQuestion}`);

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // console.log(randomNumber);

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
  }
};

randonQuestion();
