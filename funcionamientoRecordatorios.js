import { Recordatorio } from "./clases/Recordatorio.js";

let listaRecordatorios = [];
mostrarRecordatorios();

function addRecordatorio(){
    let titulo = String(document.getElementById("titulo").value);
    let fecha = document.getElementById("form-fecha").value;
    let hora = document.getElementById("form-hora").value;
    let fechaHora = `${fecha}T${hora}`;
    let recordatorio = new Recordatorio(titulo, fechaHora);
    listaRecordatorios.push(recordatorio);
    mostrarRecordatorios();
}
// Actualizado el atributo de Recordatorio, actualizad mas abajop tambien  el codigo

function mostrarRecordatorios(){
    let ordenado = [];
    listaRecordatorios.forEach(recordatorio => {
        if(listaRecordatorios.length > 1){
            for (let index = 0; index < ordenado.length; index++) {
                if(ordenado[index].fechaHora < recordatorio.fechaHora){
                    ordenado.splice(index, 0, recordatorio);
                }
            }
        } else {
            ordenado.push(recordatorio);
        }
    });
    document.getElementById("listaRecordatorios").innerHTML = "";
    ordenado.forEach(recordatorio => {
        let dia = String(recordatorio.fecha.getDate()).padStart(2, '0');
        let mes = String(recordatorio.fecha.getMonth() + 1).padStart(2, '0'); 
        let año = recordatorio.fecha.getFullYear(); 
        let fechaFormateada = `${dia}-${mes}-${año}`;
        document.getElementById("listaRecordatorios").innerHTML += `Titulo: ${recordatorio.titulo} <br> Fecha: ${fechaFormateada} <br> Hora: ${recordatorio.hora}`;
    });
}

window.addRecordatorio = addRecordatorio;