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
let totalScore = 0;
let habitPlus = 0;
let habitMinus = 0;
//console.log(typeof firstName, typeof age);

/* greet user */
const greeting = () => {
  score.textContent =
    'Hello, ' + firstName.value + '!' + ' Please enter your age.';
};
firstName.addEventListener('change', greeting);

/* function to calculate age based score */
const ageScoreCalc = () => {
  let ageNum = Number(age.value);
  // console.log(typeof age.value);

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
let extraForHealth = 0;

const countClicks = () => {
  let count = 0;
  for (const item of healthIssues) {
    if (item.checked === true) {
      count++;
      console.log(count);
    }
  }

  if (agebasedScore != 0) {
    if (count === 1) {
      extraForHealth = (agebasedScore * 1) / 100;
      totalScore = agebasedScore + extraForHealth;
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        totalScore;
    } else if (count === 2) {
      extraForHealth = (agebasedScore * 2) / 100;
      totalScore = agebasedScore + extraForHealth;
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        totalScore;
    } else if (count === 3) {
      extraForHealth = (agebasedScore * 3) / 100;
      totalScore = agebasedScore + extraForHealth;
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        totalScore;
    } else {
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        agebasedScore;
    }
  } else {
    score.textContent = 'Please enter your age.';
  }
};

for (const item of healthIssues) {
  item.addEventListener('click', countClicks);
}

/* function changeScore() {
  let count = 0;
  let checkboxElems = document.getElementsByTagName('input');
  for (let i = 0; i < checkboxElems.length; i++) {
    if (
      checkboxElems[i].name === 'curHealth' &&
      checkboxElems[i].checked === true
    ) {
      count++;
    }
  }
  return count;
} */

/* for "click" event in a checkbox current health */
/* healthIssues.forEach((issue) => {
  issue.addEventListener('click', countClicks)); */

/* for "change" event in a checkbox current health */
/* healthIssues.forEach((issue) => {
  issue.addEventListener('change', () => {
    let count = 0;
    let checkboxElems = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxElems.length; i++) {
      if (
        checkboxElems[i].type === 'checkbox' &&
        checkboxElems[i].checked === true
      ) {
        count++;
      }
    } */

// console.log(count);

/*   if (agebasedScore != 0) {
      if (count === 1) {
        extraForHealth = (agebasedScore * 1) / 100;
        totalScore = agebasedScore + extraForHealth;
        score.textContent =
          'You current riskscore based on the entered inforamtion is ' +
          totalScore;
      } else if (count === 2) {
        extraForHealth = (agebasedScore * 2) / 100;
        totalScore = agebasedScore + extraForHealth;
        score.textContent =
          'You current riskscore based on the entered inforamtion is ' +
          totalScore;
      } else if (count === 3) {
        extraForHealth = (agebasedScore * 3) / 100;
        totalScore = agebasedScore + extraForHealth;
        score.textContent =
          'You current riskscore based on the entered inforamtion is ' +
          totalScore;
      } else {
        score.textContent =
          'You current riskscore based on the entered inforamtion is ' +
          agebasedScore;
      }
    } else {
      score.textContent = 'Please enter your age.';
    }
  });
}); */

// - 5% for each Good habits
const goodHabits = document.querySelectorAll('.goodHabit');

goodHabits.forEach((goodHabit) => {
  goodHabit.addEventListener('click', () => {
    let checkboxElems = document.getElementsByTagName('input');
    let count = 0;
    if (age.value) {
      for (let i = 0; i < checkboxElems.length; i++) {
        if (
          checkboxElems[i].type === 'checkbox' &&
          checkboxElems[i].checked === true
        ) {
          count++;
        }
      }
      //console.log(count);

      habitMinus = ((agebasedScore * 5) / 100) * count;
      console.log(habitMinus);
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        (agebasedScore - habitMinus);
      //console.log(habitReduce);
    } else {
      score.textContent = 'Please enter your age.';
    }
  });
});
/* +5% - for each Bad habit */
const badHabits = document.querySelectorAll('.badHabit');

badHabits.forEach((badHabit) => {
  badHabit.addEventListener('click', () => {
    let checkboxElems = document.getElementsByTagName('input');
    let count = 0;
    if (age.value) {
      for (let i = 0; i < checkboxElems.length; i++) {
        if (
          checkboxElems[i].type === 'checkbox' &&
          checkboxElems[i].checked === true
        ) {
          count++;
        }
      }
      console.log(count);
      habitPlus = ((agebasedScore * 5) / 100) * count;
      score.textContent =
        'You current riskscore based on the entered inforamtion is ' +
        (agebasedScore + habitPlus);
    } else {
      score.textContent = 'Please enter your age.';
    }
  });
});
