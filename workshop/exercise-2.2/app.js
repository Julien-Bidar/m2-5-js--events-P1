// Exercise 2.2
// ------------
console.log('exercise 2.2');

const div = document.querySelector("div")
div.style.textAlign = "center"

for(i=0; i<20; i++){
    let btn = div.appendChild(document.createElement("button"));
    btn.innerText = i+1
    btn.style.cssText = "width: 100px; heigt: 100px; backgroundcolor: red"
}