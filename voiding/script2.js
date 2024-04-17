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

const paragraph = "When I reach into an empty pocket and feel around, it feels like my hand is trying to make sense of the available space. There is an additive quality to removal. The making of space is still a kind of production. What is the difference between finding a gap and creating a gap? (1) In 1973, Mary Miss created a 7 foot by 7 foot sculpture in Oberlin, Ohio. It was a rectangular hole in the earth, with a wooden lattice embedded. She says, “Unlike a monolith, the work confronts the viewer in a way that is compelling by its absence”. (2) “I don’t hear music when I write it. I write in order to hear something I haven’t heard yet” (3) Claudia Marina wonders what participatory design may would look like without designers. What do we gain from exclusion? (4) Alexander Galloway describes JODI’s work as being assembled from the negative space that exists between discrete web pages. (5) One does not learn something new until one unlearns something old, otherwise one is simply adding information rather than rethinking a structure. (6) Choosing to maintain or remove outliers from a dataset is a political act. Their absences shape and set the stakes for what is and isn’t valued. (7) When asked about the temporality of archives, artist Romi Morrison described gaps as gesturing towards an inquiry and a history. (8) In 4’33’, Cage writes what has not been and cannot possibly be musically formalized nor technically inscribed. What could be more ephemeral, perishable, drastically and fundamentally non-writable than silence?";  

function splitWords(paragraph, containerId) {
      const container = document.getElementById('text-container');
      const words = paragraph.split(/\s+/);

      const spanElements = words.map((word, index) => {
        const spanId = `word-${index + 1}`;
        return `<span id="${spanId}">${word}</span>`;
      });

      const spanHtml = spanElements.join(' ');

      container.innerHTML = spanHtml;
    }

splitWords(paragraph, 'container');


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