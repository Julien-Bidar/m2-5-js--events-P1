// Exercise 1.2
// ------------
console.log('exercise 1.2');
let body = document.querySelector("body")
let win = false
let lose = false

let sec = Math.floor(Math.random()* 5000)
let secDisp = Math.round(sec/1000);

const span = document.getElementById("time");
span.innerText = secDisp

const dispWin = ()=>{
    if(!lose){
        const winH1 = document.createElement("h1")
        winH1.innerText = "You win!"
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
        body.appendChild(loseH1)
    }
}, sec)
