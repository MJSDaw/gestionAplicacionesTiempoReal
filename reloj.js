let reloj = new Date();
const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

actFecha();
actReloj();
setInterval(actReloj, 1000);

function actReloj(){
    reloj = new Date();
    document.getElementById("hora").innerText = String(reloj.getHours()).padStart(2, '0') + ":" + String(reloj.getMinutes()).padStart(2, '0') + ":" + String(reloj.getSeconds()).padStart(2, '0');
}
function actFecha(){
    let dia = diasSemana[reloj.getDay()].charAt(0).toUpperCase() + diasSemana[reloj.getDay()].slice(1);
    fecha = `${dia}, ${reloj.getDay()} de ${meses[reloj.getMonth()]} de ${reloj.getFullYear()}`;
    document.getElementById("fecha").innerText = fecha;
}