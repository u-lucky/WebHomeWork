'use strick'

let timerId1;
let timerId2;
let timerId3;
let timerId4; // code by coolest frog

document.getElementById('Btn1').addEventListener('click', () => {
    if (timerId1) return;
    const counter = document.getElementById('p1');
    timerId1 = setInterval(() => {
      counter.textContent = Number(counter.textContent) + 1;
    }, 1000);
});


document.getElementById('Btn2').addEventListener('click', () => {
    if (timerId2) return;
    const counter = document.getElementById('p2');
    timerId2 = setInterval(() => {
      let value = Number(counter.textContent) - 1;
      counter.textContent = value;
      if (value <= 0) {
        clearInterval(timerId2);
        timerId2 = null;
      }
    }, 1000);
});


document.getElementById('input').addEventListener('blur', function() {
    const value = Number(this.value);
    if (isNaN(value)) return;
    const counter = document.getElementById('p3');
    if (timerId3) clearInterval(timerId3);
    counter.textContent = value;
    timerId3 = setInterval(() => {
      counter.textContent = Number(counter.textContent) - 1;
      if (counter.textContent <= 0) {
        clearInterval(timerId3);
        timerId3 = null;
      }
    }, 1000);
});

document.getElementById('Btn4').addEventListener('click', () => {
    const value = Number(document.getElementById('input2').value);
    if (isNaN(value)) return;
    const counter = document.getElementById('p4');
    counter.textContent = value;
    if (timerId4) clearInterval(timerId4);
    timerId4 = setInterval(() => {
      counter.textContent = Number(counter.textContent) - 1;
      if (counter.textContent <= 0) {
        clearInterval(timerId4);
        timerId4 = null;
      }
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('message').textContent = 'Cool сообщение через 10 секунд';
    }, 10000);
});