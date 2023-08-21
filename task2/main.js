//alert("Welcome!");

//FIRST -
/* let firstName = prompt("What's your name?");
if (firstName === "Inna") {
  console.log("Hello, Inna");
} else {
  console.log(`Hello, ${firstName}`);
} */

//SECOND
/* parseInt(..) - it cut integers after dot and omit letters
  parseFloat(..) / Number (..) - leaves numbers after dot and omit letters
*/

/* /let temp = prompt('How cold is it? Say it in celcius');
if (Number(temp) <= 15) {
  console.log(`It is cold - wear a jacket`);
} else {
  console.log(`${parseFloat(temp)} is above 15, you can go without a jacket`);
} */

//THIRD
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

//THIRD - salary task
let moneyPerHour = Number(prompt('How much do you earn per hour?'));
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
}
