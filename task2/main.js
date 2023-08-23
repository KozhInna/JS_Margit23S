//alert("Welcome!");

//FIRST - prompt Name and check with "if-else" condition
/* let firstName = prompt("What's your name?");
if (firstName === "Inna") {
  console.log("Hello, Inna");
} else {
  console.log(`Hello, ${firstName}`);
} */

//SECOND - prompt temperature and check with "if-else" condition
/* parseInt(..) - it cut integers after dot and omit letters
  parseFloat(..) / Number (..) - leaves numbers after dot and omit letters

let temp = prompt('How cold is it? Say it in celcius');
if (Number(temp) <= 15) {
  console.log(`It is cold - wear a jacket`);
} else {
  console.log(`${parseFloat(temp)} is above 15, you can go without a jacket`);
} */

//THIRD - prompt Season and check with "switch" condition
/* let season = prompt('What is your favorite season?').toLowerCase();
console.log(season);

switch (season) {
  case 'spring':
    console.log('good!');
    break;
  case 'summer':
    console.log('great!');
    break;
  case 'autumn':
    console.log('perfect!');
    break;
  case 'winter':
    console.log('could be better!');
    break;

  default:
    console.log('Please specify your favorite season');
    break;
} */

//THIRD - 1) salary calculator
/** let moneyPerHour = Number(prompt('How much do you earn per hour?'));
let hoursPerDay = Number(prompt('How many hour did you work?'));

console.log(moneyPerHour, hoursPerDay);

if (hoursPerDay <= 7) {
  console.log(moneyPerHour * hoursPerDay);
} else if (hoursPerDay > 7 && hoursPerDay <= 9) {
  console.log(moneyPerHour * 7 + moneyPerHour * 1.5 * (hoursPerDay - 7));
} else if (hoursPerDay > 9) {
  console.log(
    moneyPerHour * 7 +
      moneyPerHour * 1.5 * 2 +
      moneyPerHour * 2 * (hoursPerDay - 9)
  );
} **/

//THIRD - 2) salary calculator code modified
// function salaryCalc() {
//   let moneyPerHour = Number(prompt('How much do you earn per hour?'));
//   let hoursPerDay = Number(prompt('How many hour did you work?'));

// console.log(moneyPerHour, hoursPerDay);

//   let salary;
//   let basicSalary = 7 * moneyPerHour;
//   let halfIncresedSalary =
//     7 * moneyPerHour + moneyPerHour * 1.5 * (hoursPerDay - 7);
//   let doubleIncreasedSalary =
//     moneyPerHour * 7 +
//     moneyPerHour * 1.5 * 2 +
//     moneyPerHour * 2 * (hoursPerDay - 9);

//   if (hoursPerDay <= 7) {
//     salary = basicSalary;
//   } else if (hoursPerDay > 7 && hoursPerDay <= 9) {
//     salary = halfIncresedSalary;
//   } else if (hoursPerDay > 9) {
//     salary = doubleIncreasedSalary;
//   }
//   console.log(`You have earned ${salary}`);
// }
// salaryCalc();

//THIRD - 3) salary calculator code modified
// function salaryCalc() {
//   let moneyPerHour = Number(prompt('How much do you earn per hour?'));
//   let hoursPerDay = Number(prompt('How many hour did you work?'));

//   // console.log(moneyPerHour, hoursPerDay);

//   let salary;
//   let basicSalary = 7 * moneyPerHour;
//   let halfIncresedSalary =
//     7 * moneyPerHour + moneyPerHour * 1.5 * (hoursPerDay - 7);
//   let doubleIncreasedSalary =
//     moneyPerHour * 7 +
//     moneyPerHour * 1.5 * 2 +
//     moneyPerHour * 2 * (hoursPerDay - 9);

//   if (hoursPerDay <= 7) {
//     salary = basicSalary;
//   } else if (hoursPerDay <= 9) {
//     salary = halfIncresedSalary;
//   } else {
//     salary = doubleIncreasedSalary;
//   }
//   console.log(`You have earned ${salary}`);
// }
// salaryCalc();

//Odd and even numbers - task random number
// First option

/* const calcRandomNumber = () => {
  const num1 = Number(prompt('Type your first number'));
  const num2 = Number(prompt('Type your second number'));
  const num3 = Number(prompt('Type your third number'));
  let sum;
  let multipl;

  if (num1 < 0 && num2 < 0 && num3 < 0) {
    console.log('only negatives');
  } else if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    sum = num1 + num2 + num3;
    multipl = num1 * num2 * num3;
    console.log(
      `Your numbers are ${num1}, ${num2}, ${num3}, so their sum is ${sum} and their multiplication is ${multipl}`
    );
  } else {
    sum = num1 + num2 + num3;
    console.log(
      `Your numbers are ${num1}, ${num2}, ${num3}, so their sum is ${sum}`
    );
  }
};
calcRandomNumber(); */

// Second option
/* const calcRandomNumber = () => {
  const num1 = Number(prompt('Type your first number'));
  const num2 = Number(prompt('Type your second number'));
  const num3 = Number(prompt('Type your third number'));
  const sum = num1 + num2 + num3;
  const multipl = num1 * num2 * num3;

  if (num1 < 0 && num2 < 0 && num3 < 0) {
    console.log('only negatives');
  } else if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log(
      `Your numbers are ${num1}, ${num2}, ${num3}, so their sum is `,
      sum,
      'and their multiplication is ',
      multipl
    );
  } else {
    sum = num1 + num2 + num3;
    console.log(
      `Your numbers are ${num1}, ${num2}, ${num3}, so their sum is `,
      sum
    );
  }
};
calcRandomNumber(); */

//Task - Odd or even
// First variant
/* const checkNum = () => {
  const num = Number(prompt("What's your number?"));

  if (num >= 0 && num % 2 === 0) {
    console.log(`Number ${num} is even`);
  } else if (num > 0 && num % 2 !== 0) {
    console.log(`Number ${num} is odd`);
  } else if (num < 0) {
    console.log('Please enter a positive number');
    const num = Number(prompt("What's your number?"));
    if (num > 0 && num % 2 === 0) {
      console.log(`Number ${num} is even`);
    } else {
      console.log(`Number ${num} is odd`);
    }
  }
};
checkNum(); */

// Second variant
/* const checkNum = () => {
  const num = Number(prompt("What's your number?"));

  if (num >= 0) {
    if (num % 2 === 0) {
      console.log(`Number ${num} is even`);
    } else {
      console.log(`Number ${num} is odd`);
    }
  } else {
    console.log('Please enter a positive number');
    const num = Number(prompt("What's your number?"));
    if (num % 2 === 0) {
      console.log(`Number ${num} is even`);
    } else {
      console.log(`Number ${num} is odd`);
    }
  }
};
checkNum(); */

//Task - Odd or even
// Second.1 variant with loop - do...while
/* const checkNum = () => {
  let num;
  do {
    num = Number(prompt("What's your number?"));
    if (num < 0) {
      alert('Give positive number');
    } else if (num >= 0 && num % 2 === 0) {
      console.log(`Number ${num} is even`);
    } else {
      console.log(`Number ${num} is odd`);
    }
  } while (num < 0);
};
checkNum();*/

//Task - Odd or even
//Second.2 variant with loop - do...while
/* const checkNum = () => {
  let num;
  do {
    num = Number(prompt("What's your number?"));
    if (num >= 0) {
      if (num % 2 === 0) {
        console.log(`Number ${num} is even`);
      } else {
      console.log(`Number ${num} is odd`);
    }
  } while (num <= 0);


};
checkNum(); */

//Task - Odd or even
// Third variant with loop - while
/* const checkNum = () => {
  let num = 0;
  while (num <= 0) {
    num = Number(prompt("What's your number?"));
  }

  if (num >= 0 && num % 2 === 0) {
    console.log(`Number ${num} is even`);
  } else {
    console.log(`Number ${num} is odd`);
  }
};
checkNum(); */

/* TRY - FOR loop

//Task - Odd or even
// Third variant with loop - for
const checkNum = () => {
  let num;
  for (num = 0; num !== 0; ) {
    num = Number(prompt("What's your number?"));
  }

  if (num >= 0 && num % 2 === 0) {
    console.log(`Number ${num} is even`);
  } else {
    console.log(`Number ${num} is odd`);
  }
};
checkNum();*/
