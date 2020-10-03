// Exercise 2.1
// ------------
console.log('exercise 2.1');
let div = document.querySelector("div")
div.style.textAlign = "center"


const clickFunc = (event) => {
    console.log(event.target)
    event.target.style.backgroundColor = "green";
}

for(i=0; i<20; i++){
    let button = document.createElement("button")
    button.innerText = i+1
    button.id = i+1
    button.style.backgroundColor = "red"
    button.style.border = "2px solid white"
    button.style.justifyContent = "center"
    button.style.alignItems = "center"
    button.style.width = "100px"
    button.style.height = "100px"
    button.style.margin = "3px"
    div.appendChild(button)
    button.addEventListener("click", clickFunc);
}





