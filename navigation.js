let buttonR = document.getElementById("r");
let buttonL = document.getElementById("l");
let buttonN = document.getElementById("n");
let buttonA = document.getElementById("a");

function irA(pag){
    switch(pag){
        case "r":
            buttonL.removeAttribute("class");
            buttonN.removeAttribute("class");
            buttonA.removeAttribute("class");
            buttonR.className = "nav-button-active";
            break;
        case "l":
            buttonR.removeAttribute("class");
            buttonN.removeAttribute("class");
            buttonA.removeAttribute("class");
            buttonL.className = "nav-button-active";
            break;
        case "n":
            buttonL.removeAttribute("class");
            buttonR.removeAttribute("class");
            buttonA.removeAttribute("class");
            buttonN.className = "nav-button-active";
            break;
        case "a":
            buttonL.removeAttribute("class");
            buttonN.removeAttribute("class");
            buttonR.removeAttribute("class");
            buttonA.className = "nav-button-active";
            break;
    }
}