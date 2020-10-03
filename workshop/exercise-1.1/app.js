// Exercise 1.1
// ------------
console.log('exercise 1.1');

let body = document.querySelector("body");

let win = false
let lose = false

const display = () =>{
    let disp = document.createElement("h1");
    if (!lose){        
        disp.innerText = "You Win!"
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
        body.appendChild(youLose)
    }
}, 1000)




