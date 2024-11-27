import { Recordatorio } from "./clases/Recordatorio.js";

let listaRecordatorios = [];

function addRecordatorio(){
    console.log("test");
    let titulo = String(document.getElementById("titulo").value);
    let fecha = String(document.getElementById("form-fecha").value);
    let hora = String(document.getElementById("form-hora").value);
    let recordatorio = new Recordatorio(titulo, fecha, hora);
    listaRecordatorios.push(recordatorio);
    document.getElementById("listaRecordatorios").innerText = listaRecordatorios;
}
window.addRecordatorio = addRecordatorio;