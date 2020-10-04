// Exercise 1.1
// ------------
console.log('exercise 1.1');

let body = document.querySelector("body");
body.style.cssText = "background: radial-gradient(circle, rgba(65,96,177,1) 0%, rgba(107,176,190,1) 100%); text-align: center"
let title = body.appendChild(document.createElement("h1"))
title.textContent = "Be a faster clicker!!!"
title.style.cssText = "color: white; margin: 25px; font-size: 45px"


let win = false
let lose = false

const display = () =>{
    let disp = document.createElement("h1");
    if (!lose){        
        disp.innerText = "You Win!"
        disp.style.cssText = "color: pink; margin: 75px; font-size: 45px"
        win = true
    }
    body.appendChild(disp)
}


body.addEventListener("click", display);

setTimeout (() => {
    lose = true;
    if(!win){
        let youLose = document.createElement('h1')
        youLose.innerText = "You Lose!"
        youLose.style.cssText = "color: red; margin: 75px; font-size: 45px"
        body.appendChild(youLose)
    }
}, 1000)




