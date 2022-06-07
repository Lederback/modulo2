const gravity = 10;

function calc(){
    const velInicial = document.querySelector("#velIncial").value;
    const maxHeight = document.querySelector("#maxHeight");
    const totalTime = document.querySelector("#totalTime");

    let calcTime = Number(velInicial)/gravity;
    let calcHeight = Number(velInicial)**2/gravity;

    maxHeight.innerHTML = calcHeight;
    totalTime.innerHTML = calcTime;
}