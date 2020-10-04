// Exercise 2.4
// ------------
console.log('exercise 2.4');

const body = document.querySelector("body");
body.style.cssText = "margin: 0; padding:0"

const header = document.querySelector("div");
header.className = "header";
header.style.cssText = "text-align: center; width: 100vw; height: 150px; background-color: grey; margin: none"

// creating the button div
const btnDiv = body.appendChild(document.createElement("div"))
btnDiv.className = "btn-div"

// creating and styling the button
const startBtn = header.appendChild(document.createElement("button"));
startBtn.style.cssText = "height: 70px; width: 150px; background-color: yellow; font-size: 40px; border: none; margin: 35px; color: grey; outline: none"
startBtn.textContent = "Start";

startBtn.addEventListener("click", ()=>{
    let win = false
    let lose = false
    //change button style
    startBtn.style.cssText = "height: 70px; width: 150px; font-size: 40px; margin: 35px; background-color: grey; color: yellow; border: solide 2px yellow; outline: none; box-shadow: none; transition: all .5s ease";
    setTimeout(() => {
        startBtn.style.display = "none"
    }, 520)
    //set countdown
    let secLeft = 5;
    let countdown = setInterval(() => {
        let counter = header.appendChild(document.createElement("h1"));
        counter.style.cssText = "font-size: 45px; color: white; margin: 0; padding: 40px";
        if(secLeft <= 0){
            clearInterval(countdown);
            counter.textContent = "0"
        } else {
            counter.textContent = secLeft;
            secLeft --;
            setTimeout(() => { //this allows secLeft to be printed at a fixed position
                counter.style.display = "none"; 
            }, 800)
        }
    }, 1000);

    
    // get a random number of buttons
    for(i=0; i<Math.floor(Math.random() * 9) + 1; i++){
        let btn = btnDiv.appendChild(document.createElement("button"));
        btn.className = "colored-btn"
        let topPosition = Math.random()*(820 - 160) + 160 // we don't want any button in the header which is 150px high
        let lefPosition = Math.floor(Math.random()* 1200)
        btn.textContent = i+1
        btn.style.cssText = "width: 70px; height: 70px; border:none; color:white; font-size: 15px; font-weight: bold; border-radius: 50%; outline: none";
        btn.style.position = "absolute"
        btn.style.top = `${topPosition}px`
        btn.style.left = `${lefPosition}px`
        btn.style.backgroundColor = "red"
        let btnListener = function() {
            if(btn.style.backgroundColor === "red"){
                btn.style.backgroundColor = "green";
            } else {
                btn.style.backgroundColor = "red";
            }
        }
        btn.addEventListener("click", btnListener);
        setTimeout(() => {
            btn.removeEventListener("click", btnListener)
        }, 6000)
    }
    
    let btns = document.querySelectorAll(".colored-btn")
    //console.log(typeof btns) // object

    // display message
    setTimeout(() =>{
        let winArr = []
        btns.forEach((el) => {
            if(el.style.backgroundColor === "green"){
                winArr.push(el)
            }
        })
        const display = btnDiv.appendChild(document.createElement("button"));
        display.style.cssText = "background-color: red; box-shadow: grey 2px 2px; color: white; width: 300px; height: 0px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 10px; font-size: 50px"
        if(winArr.length === btns.length){
            display.textContent = "You Win!!!"
            win = true;
            display.style.cssText = "transition: height .5s ease; background-color: green; box-shadow: grey 2px 2px; color: white; width: 300px; height: 200px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 10px; font-size: 50px"
        } else {
            display.textContent = "You Lose..."
            display.style.cssText = "transition: all .5s; background-color: red; box-shadow: grey 2px 2px; color: white; width: 300px; height: 200px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 10px; font-size: 50px"
        }
    }, 6000)
})
