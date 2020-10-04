// Exercise 2.2
// ------------
console.log('exercise 2.2');

const div = document.querySelector("div")
div.style.cssText = "text-align: center; padding: 40px"

for(i=0; i<20; i++){
    let btn = div.appendChild(document.createElement("button"));
    btn.textContent = i+1;
    btn.style.cssText = "width: 125px; height: 125px; border:none; margin: 2px; color:white; font-size: 40px; font-weight: bold; outline: none";
    btn.style.backgroundColor = "red";
    btn.addEventListener("click", ()=>{
        if(btn.style.backgroundColor === "red"){
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red"
        };
    });
}