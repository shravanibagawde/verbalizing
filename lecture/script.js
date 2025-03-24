//show loading screen

// let load = document.getElementById('load');

// document.addEventListener('DOMContentLoaded', function() {
//   load.classList.remove('show');
//   void load.offsetWidth;
//   load.classList.add('show')
// });



//reset pres on resize

// window.onresize = function() {
//   window.scrollTo(0, 0);
// };

//animate title 



//open info panel

const overlay = document.querySelector('.overlay');
const toggle = document.querySelector('.info');

function toggleOverlay() {
            overlay.classList.toggle('info-show');
            overlay.classList.toggle('overlay');
}

toggle.addEventListener('click', toggleOverlay);



//typing test

let i = 0;
let txt = 'User-uploaded Google Maps views proved to be a great interface to capture and appropriate these moments.';
let speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function animateTitle() {
i >= message.length - 1 ? (i = 0) : i++,
(document.title = message[i]),
setTimeout('animateTitle()', 300)
}
var message = [
'Verbalizing', 'Verbalizing.',
'Verbalizing..', 'Verbalizing...', 'Verbalizing..', 'Verbalizing.', 'Verbalizing']
i = 0
animateTitle()

function openResizedWindow(url, width, height, left, top) {
    var options = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
    window.open(url, "", options);
}






