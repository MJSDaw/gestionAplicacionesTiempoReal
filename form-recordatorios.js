let fecha = document.getElementById("form-fecha");
let hora = document.getElementById("form-hora");
let now = new Date();

fecha.value = now.toISOString().split('T')[0];
hora.value = now.toTimeString().split(' ')[0].substring(0, 5);

