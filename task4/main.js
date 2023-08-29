"use strict";

const calcGasoline = () => {
  const price = document.querySelector("#price").value;
  const money = document.querySelector("#money").value;

  const answer = document.querySelector("#answer");

  const result = (money / price).toFixed(2);
  console.log(result);

  result > 10
    ? (answer.textContent = `You get ${result} litres. Good, you can escape now.`)
    : (answer.textContent = `You get ${result} litres. Ups, you have to stay here.`);
};
