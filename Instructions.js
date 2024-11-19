let timer;
let counter = 0;
let instructions = document.getElementById("Teext");


//Sets up scrolling text for scroll text and Disappear function.

const nextText = [
  "Box-kun can be moved either with control box buttons or keyboard",
  "Use the speed box below and enter a number to change box-kun's speed",
  "To move box-kun with keyboard use the 'W' 'A' 'S' 'D' keys",
  "Also click on the version text to see the history of this webpage",
];

setTimeout(Disappear, 10);

function Disappear() {
  /* store timer variable to go through text
    and to clear the interval after scrolling 
    through text is completed */

  timer = setInterval(ScrollText, 3800);
}

function ScrollText() {
    if (counter < 4) {
        instructions.innerHTML = nextText[counter];
        counter++
    } else {
        clearInterval(timer);
        instructions.style.display = "none";
        // Reset();

    }
}