//This form will collect the following information and calculate the insurance riskscore:
// 1) Base score is 500 and score will be increased depending of the age of the customer.
// 2) Below the age of 18 years = 500 If older than 18, then increase: 18-25 -> + 10% 26-35 -> + 30% 36-45 -> +60% 46-55 -> +100% 56-65 ->+150% 66+ -> +210%
// 3) Current Health (Checkboxes) You can select one or more of the following options: - Hypertension - High Blood Sugar - Overweight. Each healt condition will Increase of +1% per score
// 4) Good habits - Reduce 5% per each. Bad habits - Increase 5% per each.

const firstName = document.querySelector('#name');
const age = document.querySelector('#age');
const score = document.querySelector('.riskscore');
const baseScore = 500;
let totalScore = 0;
//console.log(typeof firstName, typeof age);

/* greet user */
firstName.addEventListener('change', function () {
  //console.log(firstName.value);
  score.textContent =
    'Hello, ' + firstName.value + '!' + ' Please enter your age.';
});
age.addEventListener('change', function () {
  let ageNum = Number(age.value);
  // console.log(typeof age.value);

  /* group 0 - 17 */
  if (ageNum < 18) {
    totalScore = baseScore;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* group 18-25 -> + 10% */
  } else if (ageNum >= 18 && ageNum <= 25) {
    totalScore = baseScore + (baseScore * 10) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* 26-35 -> + 30% */
  } else if (ageNum >= 26 && ageNum <= 35) {
    totalScore = baseScore + (baseScore * 30) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* 36-45 -> +60% */
  } else if (ageNum >= 36 && ageNum <= 45) {
    totalScore = baseScore + (baseScore * 60) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* 46-55 -> +100% */
  } else if (ageNum >= 46 && ageNum <= 55) {
    totalScore = baseScore + (baseScore * 100) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* 56-65 -> +150% */
  } else if (ageNum >= 56 && ageNum <= 65) {
    totalScore = baseScore + (baseScore * 150) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* 66+ -> +210% */
  } else if (ageNum >= 66 && ageNum <= 123) {
    totalScore = baseScore + (baseScore * 210) / 100;
    score.textContent =
      firstName.value +
      '! ' +
      'Your insurance riskscore based only on the age is ' +
      totalScore +
      '.';
    /* check if it's a correct age number */
  } else {
    score.textContent =
      firstName.value +
      '! ' +
      'Please check if you entered your age correctly.';
  }
});

/* Extra for Current Health */
const healthIssues = document.querySelectorAll('.health');
let extraForHealth = 0;

healthIssues.forEach((issue) => {
  issue.addEventListener('click', () => {
    let count = 0;
    let checkboxElems = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxElems.length; i++) {
      if (
        checkboxElems[i].type === 'checkbox' &&
        checkboxElems[i].checked === true
      ) {
        count++;
      }
    }
    // console.log(count);

    if (totalScore != 0) {
      if (count === 1) {
        extraForHealth = (500 * 1) / 100;
        score.textContent = totalScore + extraForHealth;
      } else if (count === 2) {
        extraForHealth = (500 * 2) / 100;
        score.textContent = totalScore + extraForHealth;
      } else if (count === 3) {
        extraForHealth = (500 * 3) / 100;
        score.textContent = totalScore + extraForHealth;
      } else {
        score.textContent = totalScore;
      }
    } else {
      score.textContent = 'Please enter your age.';
    }
  });
});

// - 5% for each Good habits
const goodHabits = document.querySelectorAll('.goodHabit');
let habitReduce = 0;

goodHabits.forEach((goodHabit) => {
  goodHabit.addEventListener('click', () => {
    let checkboxElems = document.getElementsByTagName('input');
    let count = 0;
    for (let i = 0; i < checkboxElems.length; i++) {
      if (
        checkboxElems[i].type === 'checkbox' &&
        checkboxElems[i].checked === true
      ) {
        count++;
      }
    }
    console.log(count);
    habitReduce = ((500 * 5) / 100) * count;
    score.textContent = totalScore - habitReduce;
    //console.log(habitReduce);
  });
});
/* +5% - for each Bad habit */
const badHabits = document.querySelectorAll('.badHabit');
let habitIncrise = 0;

badHabits.forEach((badHabit) => {
  badHabit.addEventListener('click', () => {
    let checkboxElems = document.getElementsByTagName('input');
    let count = 0;
    for (let i = 0; i < checkboxElems.length; i++) {
      if (
        checkboxElems[i].type === 'checkbox' &&
        checkboxElems[i].checked === true
      ) {
        count++;
      }
    }
    console.log(count);
    habitIncrise = ((500 * 5) / 100) * count;
    score.textContent = totalScore + habitIncrise;
    //console.log(habitReduce);
  });
});
