// Exercise 1.2
// ------------
console.log('exercise 1.2');
let body = document.querySelector("body")
body.style.cssText = "background: radial-gradient(circle, rgba(65,96,177,1) 0%, rgba(107,176,190,1) 100%); text-align: center"
let win = false
let lose = false

let sec = Math.floor(Math.random()* 5000)
let secDisp = Math.round(sec/1000);

const span = document.getElementById("time");
span.innerText = secDisp
span.style.cssText = "color: yellow; margin: 25px; font-size: 45px; font-weight: bold"
const timeText = document.querySelector(".time-text")
timeText.style.cssText = "color: white; margin: 25px; font-size: 45px; font-weight: bold"

const dispWin = ()=>{
    if(!lose){
        const winH1 = document.createElement("h1")
        winH1.innerText = "You win!"
        winH1.style.cssText = "color: pink; margin: 80px; font-size: 80px; font-weight: bold"
        body.appendChild(winH1)
        win = true
    }
}

body.addEventListener("click", dispWin);

setTimeout(() =>{
    lose = true
    if(!win){
        const loseH1 = document.createElement("h1")
        loseH1.innerText = "You Lose!"
        loseH1.style.cssText = "color: red; margin: 75px; font-size: 45px"
        body.appendChild(loseH1)
    }
}, sec)
