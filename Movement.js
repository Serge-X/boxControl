let newSpeed;
let counter = 0;
let timer;
let numinput = document.getElementById("number");
let instructions = document.getElementById("Teext");
let boxer = document.getElementById("boxKun");
let changeTimer;

//Sets up scrolling text for scroll text and Disappear function.
const nextText =
    [
        "Box-kun can be moved either with control box buttons or keyboard",
        "Use the speed box below and enter a number to change box-kun's speed",
        "To move box-kun with keyboard use the 'W' 'A' 'S' 'D' keys", 
        "Also click on the version text to see the history of this webpage"
    ];

setTimeout(Disappear, 10);

// stores state of checked box element for smooth animating
let cState= document.getElementsByTagName("input")[1];
cState.addEventListener("click", FocusChange);

boxer.addEventListener("keydown", function(e){

    cState.checked ? KeySContext(e.key): KeyContext(e.key);

    
});

document.getElementById("Reset").addEventListener("click", Reset);

let buttons = document.getElementsByTagName("button");

//Loop through all buttons to assign an event handler
for (i = 0; i < buttons.length - 1; i++) {
    buttons[i].addEventListener("click", function () {

        cState.checked ? BtnSContext(this.id): BtnContext(this.id);
    });

}

numinput.addEventListener("input", function () {
    clearTimeout(changeTimer);
    RealSpeed(this.value);
    if (numinput.value) { changeTimer = setTimeout(FocusChange, 550); }

});

function BtnContext(id) {
    // Turns off the smooth transitions when cstate is not checked
    boxer.style.transition= "left 0s, top 0s";

    switch (id) {
        case "rightMove":
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "leftMove":
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "upMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "uprightMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downrightMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "upleftMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downleftMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;

        default:
            let text = document.getElementById("Teext");
            text.innerHTML = "This did not work";
            break;
    }
}
function BtnSContext(id) {
    // Turns on the smooth transitions when cstate is checked
    boxer.style.transition= "left 3s, top 3s";
    
    switch (id) {
        case "rightMove":
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            // boxer.focus();
            break;
        case "leftMove":
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "upMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "uprightMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downrightMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "upleftMove":
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;
        case "downleftMove":
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            boxer.focus();
            break;

        default:
            let text = document.getElementById("Teext");
            text.innerHTML = "This did not work";
            break;
    }
}
function KeyContext(key) {
    console.log("Check is off");

    // Turns off the smooth transitions when cstate is not checked
    boxer.style.transition= "left 0s, top 0s";

    switch (key) {
        case "d":
            //rightMove
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "a":
            //leftMove
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;
        case "w":
            //upMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            Check(boxer);
            break;
        case "s":
            //downMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            Check(boxer);
            break;
        case "w" && "d":
            //uprightMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "s" && "d":
            //downrightMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "w" && "a":
            //upleftMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;
        case "s" && "a":
            //downleftMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;

        default:
            let text = document.getElementById("Teext");
            text.style.display= "block";
            text.innerHTML = "This did not work";
            setTimeout(() => {
            text.style.display= "none";
                
            }, 3000);
            
    }
}
function KeySContext(key) {
    console.log("check is on");
    // Turns on the smooth transitions when cstate is checked
    boxer.style.transition= `left 2s, top 2s`;
    
    switch (key) {
        case "d":
            //rightMove
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "a":
            //leftMove
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;
        case "w":
            //upMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            Check(boxer);
            break;
        case "s":
            //downMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            Check(boxer);
            break;
        case "w" && "d":
            //uprightMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "s" && "d":
            //downrightMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft + newSpeed) + 'px';
            Check(boxer);
            break;
        case "w" && "a":
            //upleftMove
            boxer.style.top = (boxer.offsetTop - newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;
        case "s" && "a":
            //downleftMove
            boxer.style.top = (boxer.offsetTop + newSpeed) + 'px';
            boxer.style.left = (boxer.offsetLeft - newSpeed) + 'px';
            Check(boxer);
            break;

        default:
            let text = document.getElementById("Teext");
            text.style.display= "block";
            text.innerHTML = "This did not work";
            setTimeout(() => {
            text.style.display= "none";
                
            }, 3000);
            
    }
}

//converting user speed input to a numbered value
function RealSpeed(Val) {
    newSpeed = Number(Val);
    return newSpeed;
}

function Reset() {
    boxer.style.top = "203px";
    boxer.style.left = "503px";
    boxer.style.backgroundImage = "url(Images/DefaultFace.png)";
    boxer.focus();


}

function Check(Boxy) {
    var boxSide = Boxy.offsetLeft + Boxy.offsetWidth;
    var boxSide2 = Boxy.offsetTop + Boxy.offsetHeight;
    if (boxSide >= (document.body.offsetWidth - 100)) {
        Boxy.style.backgroundImage = "url(Images/OcrapRight.png)";
    } else if (boxSide <= 195) {
        Boxy.style.backgroundImage = "url(Images/OcrapLeft.png)";

    } else if (boxSide2 > 904) {
        Boxy.style.backgroundImage = "url(Images/OcrapDown.png)";

    } else if (boxSide2 < 250) {
        Boxy.style.backgroundImage = "url(Images/OcrapUp.png)";
    }
    else if (boxSide <= 529 && boxSide2 >= 853) {
        Boxy.style.backgroundImage = "url(Images/Derpface.png)";
    }
    else {
        Boxy.style.backgroundImage = "url(Images/DefaultFace.png)";

    }
    if (boxSide > window.innerWidth)
    { 
        window.scrollTo(boxSide, boxSide2)
    } else (boxSide2 > window.innerHeight)
    {
        window.scrollTo(boxSide, boxSide2);
    }


}

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
        Reset();

    }
}

function FocusChange() {
    boxer.focus();
}
