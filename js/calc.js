  
const display = document.querySelector('.calc .display');
let prevOper = null;
document.querySelectorAll('.calc .digits button')
    .forEach( button => button.addEventListener('click', digitOperPressed));



function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
    prevOper = null;
}

document.querySelectorAll('.calc .opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(event) {
    const btnText = event.target.innerText;
    if (!prevOper) {
        display.value += btnText;
    } else {
        display.value = display.value.substr(0, display.value.length-1) + btnText;
    }   
    prevOper = btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

document.querySelector('.calc .clear')
    .addEventListener('click', clearPressed);

function clearPressed() {
    display.value = "";
}
 