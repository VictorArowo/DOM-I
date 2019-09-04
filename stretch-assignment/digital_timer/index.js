let i=0;

let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let colon = document.getElementById("colon");
let button = document.getElementById("button");

let clock=0;

start = () => {
    msHundreds.textContent = "0";
    msTens.textContent = "0";
    secondTens.textContent = "0";
    secondOnes.textContent = "0";
    clock = 0;
    msHundreds.classList.remove("redDigit");
    msTens.classList.remove("redDigit");
    secondTens.classList.remove("redDigit");
    secondOnes.classList.remove("redDigit");
    colon.classList.remove("redDigit");

    timer = setInterval(startClock, 10);
} 

reset = () => {
    clearInterval(timer);
    clock = 0;
    updateDisplay();
    button.disabled = false;
}


function startClock(){
    updateDisplay();
    button.disabled = true;

    if(clock === 1001){
        clearInterval(timer);
        msHundreds.classList.add("redDigit");
        msTens.classList.add("redDigit");
        secondTens.classList.add("redDigit");
        secondOnes.classList.add("redDigit");
        colon.classList.add("redDigit");
        button.disabled = false;
    }

}


function updateDisplay() {
    let a = pad(clock++);
    msHundreds.textContent = a[2];
    msTens.textContent = a[3];
    secondTens.textContent = a[0];
    secondOnes.textContent = a[1];
}

function pad(n) {
    let s = "000" + n;
    return s.substr(s.length-4);
}

