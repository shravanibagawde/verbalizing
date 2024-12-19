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
 
$(function () {
        $(".slip").draggable({            
            stack: ".slip"
        });
    });

function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min)/5) *5 + min;   
}

let winWidth = document.body.clientWidth;
let winHeight = document.body.clientHeight;

let slip1 = document.querySelector('.slip1')
let slip2 = document.querySelector('.slip2')
let slip3 = document.querySelector('.slip3')
let slip4 = document.querySelector('.slip4')

slipRot = getRandomNumber(-25, 25)
slipTop = getRandomNumber(1, 10);
slipLeft = getRandomNumber(30, 50);


slip1.style.transform = `rotate(${slipRot}deg)`;
slip1.style.top = getRandomNumber(1, 25) + "vh";
slip1.style.left = getRandomNumber(1, 80) + "vw";


slip2.style.transform = `rotate(${slipRot}deg)`;
slip2.style.top = getRandomNumber(1, 25) + "vh";
slip2.style.left = getRandomNumber(1, 80) + "vw";


slip3.style.transform = `rotate(${slipRot}deg)`;
slip3.style.top = getRandomNumber(1, 25) + "vh";
slip3.style.left = getRandomNumber(1, 80) + "vw";


slip4.style.transform = `rotate(${slipRot}deg)`;
slip4.style.top = getRandomNumber(1, 25) + "vh";
slip4.style.left = getRandomNumber(1, 80) + "vw";


function toggleHide() {
    const slips = document.querySelector('.slips');
    slips.classList.toggle('slips');
    slips.classList.toggle('hide');
}

const toggleHideSlips = document.getElementById('hide-slips');
toggleHideSlips.addEventListener('click', toggleHide);

