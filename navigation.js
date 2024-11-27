let buttonR = document.getElementById("r");
let buttonL = document.getElementById("l");
let buttonN = document.getElementById("n");
let buttonA = document.getElementById("a");
let seccionR = document.getElementById("recordatorios");
let seccionL = document.getElementById("listas");
let seccionN = document.getElementById("notas");
let seccionA = document.getElementById("areaPersonal");

function irA(pag){
    switch(pag){
        case "r":
            marcarBoton("r");
            mostrarSeccion("r");
            break;
        case "l":
            marcarBoton("l");
            mostrarSeccion("l");
            break;
        case "n":
            marcarBoton("n");
            mostrarSeccion("n");
            break;
        case "a":
            marcarBoton("a");
            mostrarSeccion("a");
            break;
    }
}
function marcarBoton(boton){
    switch(boton){
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
function mostrarSeccion(seccion){
    switch(seccion){
        case "r":
            seccionL.style.display = "none";
            seccionN.style.display = "none";
            seccionA.style.display = "none";
            seccionR.style.display = "flex";

            break;
        case "l":
            seccionR.style.display = "none";
            seccionN.style.display = "none";
            seccionA.style.display = "none";
            seccionL.style.display = "flex";
            break;
        case "n":
            seccionL.style.display = "none";
            seccionR.style.display = "none";
            seccionA.style.display = "none";
            seccionN.style.display = "flex";
            break;
        case "a":
            seccionL.style.display = "none";
            seccionN.style.display = "none";
            seccionR.style.display = "none";
            seccionA.style.display = "flex";
            break;
    }
}