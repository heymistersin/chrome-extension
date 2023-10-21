

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// https://www.w3schools.com/js/js_timing.asp


document.addEventListener("DOMContentLoaded", (event) => {
    const body = document.getElementById('body');
    const submit = document.getElementById('submit-button');
    const inputbox = document.getElementById('input-box');
    const p = document.createElement('p');
    document.body.appendChild(p);


    inputbox.addEventListener('input', updateValue);

    function updateValue(arg){
        p.innerHTML = arg.target.value
    }

    submit.addEventListener('click', () => setTimeout(countDown, Number(p)));

    function countDown(){
        console.log(Number(p));
    }


}) 


/*
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

*/
