/* eslint-disable */
/* import "bootstrap"; */
/* import "./style.css"; */
/* ♦ ♥ ♣ ♠ */
/* 
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
 */
let carta = {
  simboloarriba: ["♦", "♥", "♣", "♠"], simboloabajo: ["♦", "♥", "♣", "♠"], numer: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

}

function generacartas() {
  let cardnumber = Math.floor(Math.random() * carta.numer.length)
  document.querySelector("#randonnumber").innerHTML = carta.numer[cardnumber]

  {
    let cardnumber = Math.floor(Math.random() * carta.simboloarriba.length)
  document.querySelector("#iconoizquierdo").innerHTML = carta.simboloarriba[cardnumber]
  }
  {
    let cardnumber = Math.floor(Math.random() * carta.simboloabajo.length)
  document.querySelector("#iconoderecho").innerHTML = carta.simboloabajo[cardnumber]
  }

  
}

window.onload = function () {

  generacartas();


  console.log("Hello Rigo from the console!");
};
