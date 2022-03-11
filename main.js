import {functionsFinalWork} from './functions.js';



let myForm = document.getElementById("formulario")
myForm.addEventListener("submit", functionsFinalWork.formValidation)
      
///////Function for Dark /Light Mode
let $btnDark=document.getElementById("btndark")
$btnDark.addEventListener("click",functionsFinalWork.darkLightMode)









