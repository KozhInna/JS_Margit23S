/* let pizzaSize;

document.querySelector('#sizeFor2').addEventListener('click', function () {
  document.querySelector('.price').textContent = 7.5;
  pizzaSize =
});
document.querySelector('#sizeFor4').addEventListener('click', function () {
  document.querySelector('.price').textContent = 9;
});
document.querySelector('#sizeFor6').addEventListener('click', function () {
  document.querySelector('.price').textContent = 10;
});
document.querySelector('#sizeFor8').addEventListener('click', function () {
  document.querySelector('.price').textContent = 40;
});
console.log(pizzaSize);
'7,50€, 4 - 10,50€, 6 - 12,50€, 8 15,50€' */

/* Choosing a pizza size */
let pricePerSize;

const sizes = document.querySelectorAll('.size');

sizes.forEach((size) => {
  size.addEventListener('click', () => {
    if (size.value === 'serve2') {
      document.querySelector('.price').textContent = '7,50 €';
      pricePerSize = 7.5;
    } else if (size.value === 'serve4') {
      document.querySelector('.price').textContent = '10,50 €';
      pricePerSize = 10.5;
    } else if (size.value === 'serve6') {
      document.querySelector('.price').textContent = '12,50 €';
      pricePerSize = 12.5;
    } else {
      document.querySelector('.price').textContent = '15,50 €';
      pricePerSize = 15.5;
    }
  });
});

/* Choosing toppings (first 4 - free, add. toppings - extra €0.50 per each)*/
const toppings = document.querySelectorAll('.topping');

toppings.forEach((topping) => {
  topping.addEventListener('click', () => {
    if (pricePerSize > 0) {
      if (topping.value === 'serve2') {
        document.querySelector('.price').textContent = '7,50 €';
      } else if (topping.value === 'serve4') {
        document.querySelector('.price').textContent = '10,50 €';
      } else if (topping.value === 'serve6') {
        document.querySelector('.price').textContent = '12,50 €';
      } else {
        document.querySelector('.price').textContent = '15,50 €';
      }
    } else {
      if (topping.value === 'serve2') {
        document.querySelector('.price').textContent = '7,50 €';
      } else if (topping.value === 'serve4') {
        document.querySelector('.price').textContent = '10,50 €';
      } else if (topping.value === 'serve6') {
        document.querySelector('.price').textContent = '12,50 €';
      } else {
        document.querySelector('.price').textContent = '15,50 €';
      }
    }
  });
});
/* extraCheese
sausage
onion
olives
greenPepper
garlic
tomato
basil
mushrooms
pineapple */
