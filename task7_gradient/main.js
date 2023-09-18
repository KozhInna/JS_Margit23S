const formInput = document.querySelector("form");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const answer = document.querySelector(".code");

const directions = document.querySelectorAll("input[name=direction]");

const bgGenerator = () => {
  let selectedValue;

  for (const item of directions) {
    if (item.checked) {
      selectedValue = item.value;
    }
  }
  let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
  /*   console.log(color1.value, color2.value, selectedValue);
   */ answer.textContent = gradient;

  document.body.style.backgroundImage = gradient;
};

formInput.addEventListener("change", bgGenerator);
