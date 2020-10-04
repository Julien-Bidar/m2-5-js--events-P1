// Exercise 2.3
// ------------
console.log('exercise 2.3');

const div = document.querySelector("div");
div.style.cssText = "position: relative; padding: 25px"

for(i=0; i<20; i++){
    let btn = div.appendChild(document.createElement("button"));
    let topPosition = Math.floor(Math.random()*800)
    let lefPosition = Math.floor(Math.random()* 1400)
    btn.textContent = i+1
    btn.style.cssText = "width: 100px; height: 100px; border:none; color:white; font-size: 30px; font-weight: bold; border-radius: 50%; outline: none";
    btn.style.position = "absolute"
    btn.style.top = `${topPosition}px`
    btn.style.left = `${lefPosition}px`
    btn.style.backgroundColor = "red"
    btn.addEventListener("click", () => {
        if(btn.style.backgroundColor === "red"){
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
    });
}