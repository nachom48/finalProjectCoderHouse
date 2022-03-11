import {functionsLogin} from './indexFunctions.js';



functionsLogin.anchoPage();
document.getElementById("btn__iniciar-sesion").addEventListener("click", functionsLogin.iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", functionsLogin.register);
window.addEventListener("resize",functionsLogin.anchoPage)


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formularioRegister").addEventListener('submit', functionsLogin.validarFormulario)})
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formularioLogin").addEventListener('submit', functionsLogin.validarLogin);});

