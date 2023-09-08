let totalCost = 0;
let pricePerSize = 0;
let DeliveryCost = 0;
let toppingCost = 0;

/* Choosing a pizza size (radio buttons) */
const sizes = document.querySelectorAll('.size');
sizes.forEach((size) => {
  size.addEventListener('click', () => {
    if (size.value === 'serve2') {
      pricePerSize = 7.5;
      totalCost = pricePerSize + toppingCost + DeliveryCost + ' €';
    } else if (size.value === 'serve4') {
      pricePerSize = 10.5;
      totalCost = pricePerSize + toppingCost + DeliveryCost + ' €';
    } else if (size.value === 'serve6') {
      pricePerSize = 12.5;
      totalCost = pricePerSize + toppingCost + DeliveryCost + ' €';
    } else {
      pricePerSize = 15.5;
      totalCost = pricePerSize + toppingCost + DeliveryCost + ' €';
    }
    document.querySelector('.price').textContent = totalCost;
  });
});
//console.log();

/* Choosing toppings (Checkboxes) (first 4 - free, add. toppings - extra €0.50 per each)*/
const toppings = document.querySelectorAll('.topping');

toppings.forEach((topping) => {
  topping.addEventListener('click', () => {
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
    // console.log(count);

    /* adding price per size to topping */
    if (count >= 4) {
      toppingCost = (count - 4) * 0.5;
      document.querySelector('.price').textContent =
        pricePerSize + toppingCost + DeliveryCost + ' €';
    } else {
      document.querySelector('.price').textContent =
        pricePerSize + toppingCost + DeliveryCost + ' €';
    }
  });
});

/* deliver (dropdown menu) - home +5€, Eat in or Pickup food */
// !! for "dropdown list" for Event we choose a <selector>, then add Event "change" (not "click"), then work with <option> values

const deliveryMethod = document.querySelector('#select');

deliveryMethod.addEventListener('change', function () {
  if (deliveryMethod.value === 'home') {
    DeliveryCost = 5;
    document.querySelector('.price').textContent =
      pricePerSize + toppingCost + DeliveryCost + ' €';
  } else {
    DeliveryCost = 0;
    document.querySelector('.price').textContent =
      DeliveryCost + toppingCost + pricePerSize + ' €';
  }
});
