function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours}:${(minutes < 10 ? '0' : '') + minutes}`;
  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function printCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    const currentDateElement = document.getElementById('date');
    currentDateElement.textContent = formattedDate;
}

printCurrentDate();


let strings = document.querySelectorAll('span'); 
let string = [];
let look = ["visible", "hidden"]

for (let i = 0; i < strings.length; i++) { 
    strings[i].setAttribute('id', 'string' + i);
    string[i] = document.getElementById('string' + i);
    string[i].addEventListener('click', () => {
    string[i].classList.add('subtract');
    });
} 


let buttons = document.getElementById('buttons');
let printButton = document.getElementById('print-button');
let navBar = document.querySelector('.nav-bar');
let mc = document.querySelector('.matter-container');
let date = document.getElementById('date');
let clock = document.getElementById('clock');
printButton.addEventListener('click', function() {
    navBar.style.visibility = 'hidden';
    this.style.visibility = 'hidden';
    // clock.style.display = 'block';
    // date.style.display = 'block';  
    window.print();  
    navBar.style.visibility = 'visible';
    this.style.visibility = 'visible';
});

function animateTitle() {
i >= message.length - 1 ? (i = 0) : i++,
(document.title = message[i]),
setTimeout('animateTitle()', 300)
}
var message = [
'Voiding', 'Voiding.',
'Voiding..', 'Voiding...', 'Voiding..', 'Voiding.', 'Voiding']
i = 0
animateTitle()