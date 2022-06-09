/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".number").innerHTML = generadorDeNumeros();
  let suit = generadorDeSuits();
  document.querySelector(".topSuit").innerHTML = suit;
  document.querySelector(".bottomSuit").innerHTML = suit;
  document.querySelector(".card").classList.add(generadorDeClases(suit));
};

let generadorDeNumeros = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indiceN = ~~(Math.random() * numbers.length);
  return numbers[indiceN];
};

let generadorDeSuits = () => {
  let suits = ["♠", "♣", "♥", "♦"];
  let indiceS = ~~(Math.random() * suits.length);
  return suits[indiceS];
};

let generadorDeClases = suit => {
  if (suit === "♥" || suit === "♦") {
    document.querySelector(".card").classList.add("red");
  } else {
    document.querySelector(".card").classList.add("black");
  }
};
