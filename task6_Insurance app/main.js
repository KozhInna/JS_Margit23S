//This form will collect the following information and calculate the insurance riskscore:
// 1) Base score is 500 and score will be increased depending of the age of the customer.
// 2) Below the age of 18 years = 500 If older than 18, then increase: 18-25 -> + 10% 26-35 -> + 30% 36-45 -> +60% 46-55 -> +100% 56-65 ->+150% 66+ -> +210%
// 3) Current Health (Checkboxes) You can select one or more of the following options: - Hypertension - High Blood Sugar - Overweight. Each healt condition will Increase of +1% per score
// 4) Good habits - Reduce 5% per each. Bad habits - Increase 5% per each.

const firstName = document.querySelector('#name');
const age = document.querySelector('#age');
const score = document.querySelector('.riskscore');
const baseScore = 500;
let agebasedScore = 0;
let extraForHealth = 0;
let goodHabit = 0;
let badHabit = 0;
const text = 'You current riskscore based on the entered inforamtion is ';
//console.log(typeof firstName, typeof age);

/* greet user */
const greeting = () => {
  score.textContent =
    'Hello, ' +
    firstName.value +
    '!' +
    ' Calculations are based on the age parameter. Please enter your age.';
  age.style.boxShadow = '0 0 5px rgba(0, 157, 255, 1)';
};
firstName.addEventListener('change', greeting);

/* function to calculate age based score */
const ageScoreCalc = () => {
  let ageNum = Number(age.value);
  // console.log(typeof age.value);

  //UNCHECK IF anything was checked before entering age
  const checklists = document.getElementsByTagName('input');
  for (let i = 0; i < checklists.length; i++) {
    checklists[i].checked = false;
  }

  /* group 0 - 17 */
  if (ageNum < 18) {
    agebasedScore = baseScore;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';

    /* group 18-25 -> + 10% */
  } else if (ageNum >= 18 && ageNum <= 25) {
    agebasedScore = baseScore + (baseScore * 10) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
    /* 26-35 -> + 30% */
  } else if (ageNum >= 26 && ageNum <= 35) {
    agebasedScore = baseScore + (baseScore * 30) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
    /* 36-45 -> +60% */
  } else if (ageNum >= 36 && ageNum <= 45) {
    agebasedScore = baseScore + (baseScore * 60) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
    /* 46-55 -> +100% */
  } else if (ageNum >= 46 && ageNum <= 55) {
    agebasedScore = baseScore + (baseScore * 100) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
    /* 56-65 -> +150% */
  } else if (ageNum >= 56 && ageNum <= 65) {
    agebasedScore = baseScore + (baseScore * 150) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
    /* 66+ -> +210% */
  } else if (ageNum >= 66 && ageNum <= 123) {
    agebasedScore = baseScore + (baseScore * 210) / 100;
    score.textContent =
      'Your insurance riskscore based only on the age is ' +
      agebasedScore +
      '.';
  } else {
    score.textContent = 'Please check if you entered your age correctly.';
  }
};

/* calculate the age based score */
age.addEventListener('change', ageScoreCalc);

/* Extra for Current Health - Increase of 1% per score */
const healthIssues = document.querySelectorAll('input[name=curHealth]');

const countHealthClicks = () => {
  let count = 0;
  for (const item of healthIssues) {
    if (item.checked) {
      count++;
      console.log(count);
    }
  }
  let scoreCurrentHealth = 0;
  if (agebasedScore != 0) {
    if (count === 1) {
      extraForHealth = (agebasedScore * 1) / 100;
    } else if (count === 2) {
      extraForHealth = (agebasedScore * 2) / 100;
    } else if (count === 3) {
      extraForHealth = (agebasedScore * 3) / 100;
    } else if (count === 0) {
      extraForHealth = 0;
    }
    scoreCurrentHealth = agebasedScore + extraForHealth - goodHabit + badHabit;
    score.textContent = text + scoreCurrentHealth;
  } else {
    score.textContent =
      'Calculations are based on the age parameter. Please enter your age.';
    age.style.boxShadow = '0 0 5px rgba(0, 157, 255, 1)';
  }
};

for (const item of healthIssues) {
  item.addEventListener('change', countHealthClicks);
}
//checked pairs

// - 5% for each Good habits
const goodHabits = document.querySelectorAll('input[name=goodHabit]');
const badHabits = document.querySelectorAll('input[name=badHabit]');

const countGoodHabits = () => {
  let count = 0;

  for (const item of goodHabits) {
    if (item.checked) {
      count++;
    }
  }
  if (age.value) {
    goodHabit = ((agebasedScore * 5) / 100) * count;
    score.textContent =
      text + (agebasedScore + extraForHealth - goodHabit + badHabit);
  } else {
    score.textContent =
      'Calculations are based on the age parameter. Please enter your age.';
    age.style.boxShadow = '0 0 5px rgba(0, 157, 255, 1)';
  }
};

for (const item of goodHabits) {
  item.addEventListener('click', countGoodHabits);
}

/* +5% - for each Bad habit */

const countBadHabits = () => {
  let count = 0;
  for (const item of badHabits) {
    if (item.checked) {
      count++;
    }
  }
  if (age.value) {
    badHabit = ((agebasedScore * 5) / 100) * count;
    score.textContent =
      text + (agebasedScore + extraForHealth - goodHabit + badHabit);
  } else {
    score.textContent =
      'Calculations are based on the age parameter. Please enter your age.';
    age.style.boxShadow = '0 0 5px rgba(0, 157, 255, 1)';
  }
};

for (const item of badHabits) {
  item.addEventListener('click', countBadHabits);
}
