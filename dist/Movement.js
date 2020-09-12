let newSpeed;
let counter = 0;
let timer;
let numinput = document.getElementById("number");
let instructions = document.getElementById("Teext");
let boxer = document.getElementById("boxKun");
let changeTimer;

boxer.addEventListener("keydown", function(e){
    // console.log(e.key);
    KeyContext(e.key);
});
//Sets up scrolling text for scroll text and disappear function.
const nextText =
    [
        "Box-kun can be moved either with control box buttons or keyboard",
        "Use the speed box below and enter a number to change box-kun's speed",
        "To move box-kun with keyboard use the 'W' 'A' 'S' 'D' keys", 
        "Also click on the version text to see the history of this webpage"
    ];

setTimeout(disappear, 300);
let buttons = document.getElementsByTagName("button");

//Loop through all buttons to assign an event handler
for (i = 0; i < buttons.length - 1; i++) {
    buttons[i].addEventListener("click", function () {
        BtnContext(this.id);
    });

}

document.getElementById("Reset").addEventListener("click", Reset);
numinput.addEventListener("input", function () {
    clearTimeout(changeTimer);
    realSpeed(this.value);
    if (numinput.value) { changeTimer = setTimeout(FocusChange, 550); }

});



function BtnContext(id) {
    // let boxer = document.getElementById("boxKun");
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
function KeyContext(key) {
    // let boxer = document.getElementById("boxKun");
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
            break;
    }
}
//function for converting user speed input to a numbered value
function realSpeed(Val) {
    newSpeed = Number(Val);
    return newSpeed;
}

function Reset() {
    // var boxer = document.getElementById("boxKun");
    boxer.style.top = "203px";
    boxer.style.left = "503px";
    boxer.style.backgroundImage = "url(Images/DefaultFace.png)";
    boxer.focus();

}

function Check(Boxy) {
    let boxSide = Boxy.offsetLeft + Boxy.offsetWidth;
    let boxSide2 = Boxy.offsetTop + Boxy.offsetHeight;
    let btnContainer = document.getElementById("buttonContainer");
    // let btnwLocation= btnContainer.offsetHeight + btnContainer.offsetTop;
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

}

function disappear() {
    timer = setInterval(scrollText, 3800);
}

function scrollText() {
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
