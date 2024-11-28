import { Recordatorio } from "./clases/Recordatorio.js";

let listaRecordatorios = [];
mostrarRecordatorios();

function addRecordatorio(){
    let titulo = String(document.getElementById("titulo").value);
    let fecha = document.getElementById("form-fecha").value;
    let hora = document.getElementById("form-hora").value;
    let fechaHora = `${fecha}@${hora}`;
    let recordatorio = new Recordatorio(titulo, fechaHora);
    listaRecordatorios.push(recordatorio);
    mostrarRecordatorios();
}

function mostrarRecordatorios() {
    let ordenado = [];
    const contenedor = document.getElementById("listaRecordatorios");

    if (!Array.isArray(listaRecordatorios) || listaRecordatorios.length === 0) {
        console.error("La lista de recordatorios está vacía o no es válida.");
        contenedor.innerHTML = `
            <div class="no-registros">
                No hay recordatorios guardados.
            </div>
        `;  
        return;
    }

    ordenado = listaRecordatorios.sort((a, b) => {
        const fechaA = new Date(a.fechaHora.replace("@", "T")); 
        const fechaB = new Date(b.fechaHora.replace("@", "T")); 
        if (isNaN(fechaA) || isNaN(fechaB)) {
            console.error("Error al procesar las fechas: ", a, b);
            return 0; 
        }
        return fechaA - fechaB;
    });

    contenedor.innerHTML = ""; 

    ordenado.forEach(recordatorio => {
        if (!recordatorio.fechaHora || !recordatorio.titulo) {
            console.error("Recordatorio inválido: ", recordatorio);
            return;
        }

        let [fecha, hora] = recordatorio.fechaHora.split("@");
        if (!fecha || !hora) {
            console.error("Formato de fechaHora inválido en recordatorio: ", recordatorio);
            return;
        }

        let [ano, mes, dia] = fecha.split("-");
        if (!ano || !mes || !dia) {
            console.error("Formato de fecha incorrecto: ", fecha);
            return;
        }

        let fechaFormateada = `${dia}-${mes}-${ano}`;
        contenedor.innerHTML += `
            <div class="tarjeta-recordatorio">
                Título: ${recordatorio.titulo} <br>
                Fecha: ${fechaFormateada} <br>
                Hora: ${hora}
            </div>`;
    });
}


window.addRecordatorio = addRecordatorio;