// Exercise 1.0
// ------------
console.log('exercise-1');
console.log('exercise 1.1');
let body = document.querySelector("body");
const clickBody = () => {
    let p = document.createElement("p");
    p.innerText = "You Win!";
    body.appendChild(p);
}


body.addEventListener("click", clickBody);
