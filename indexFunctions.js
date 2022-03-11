
import {LoginUser} from './variables.js'
import { Accountant } from './variables.js';

export const functionsLogin={
  
    anchoPage,
    iniciarSesion,
    register,
    validarFormulario,
    validarLogin
    
  }
  //Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


///////////////////FUNCTIONS/////////////////////////////
function anchoPage(){if(window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
         caja_trasera_login.style.display = "block";
     }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
     }
 }

function iniciarSesion(){
         if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
         }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
         }
     }
function register(){
         if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
         }else{
           formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
         }
 }
///////////////////////////////////////////////////////////////
//////////////////////////////////REGISTER AND LOGIN VALIDATION//////////////////////////////////////
//////////////////////////////////REGISTER VALIDATION//////////////////////////////////////
function validarFormulario(event){
event.preventDefault()
const saveArray=[]
let accountant=new Accountant()
//////NAME VALIDATION
var name=document.getElementById("name").value
    if(!name){
            swal('Error',`The name cannot be empty
            \nPlease try again` ,'error')
        
    return;}
    if(!(/^[A-Za-z]+$/g.test(name))){
            swal('Error','You have entered an unsupported value','error')
    return;}
    if(name.length<6){
            swal('Error',`The name must contain at least 6 characters 
            \nPlease try again` ,'error')
    return;}
accountant.name=name
//////EMAIL VALIDATION
var mail=document.getElementById("mail").value
    if(!mail){
            swal('Error',`The email can't be empty
            \nPlease try again` ,'error')
    return;}
    if(!(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail))){
            swal(`Error`,`You have entered an unsupported value\n
            The email format must be  xx@xx.xx
            \n Please try again`,`error`)
    return;}
accountant.mail=mail
//////USERNAME VALIDATION
var username=document.getElementById("username").value
   if(!username){
            swal('Error',`The username can't be empty
            \nPlease try again` ,'error')
   return;}
   if(!(/^[a-zA-ZnÑ0-9]+$/g.test(username))){
            swal(`Error`,`You have entered an unsupported value\n
            The username format must only contain letters and numbers.
            \n Please try again`,`error`)
   return;}
   if(username.length<6){
            swal('Error',`The username must contain at least 6 characters 
            \nPlease try again` ,'error')
   return;}
accountant.username=username
   
//////PASSWORD VALIDATION
var password=document.getElementById("password").value
   if(!password){
            swal('Error',`The password can't be empty
            \nPlease try again` ,'error')
   return;}
   if(!(/^[a-zA-Zn-Ñ0-9]+$/g.test(password))){
            swal(`Error`,`You have entered an unsupported value\n
            The password format must only contain letters and numbers.
            \n Please try again`,`error`)
   return}
   if(typeof password!=="string"){
           swal('Error',`The password cannnot be only numeric.
           \nPlease try again` ,'error')
           return}
   if(password.length<6){
           swal('Error',`The password must contain at least 6 characters 
           \nPlease try again` ,'error')
           return;}
accountant.password=password;

///SAVING ALL ACCOUNTANT INFO 
saveArray.push(accountant)
console.log(saveArray)
///SAVING INFO IN LOCALSTORAGE
   if (localStorage.getItem){
          let bringJSON=localStorage.getItem('usuario')
          saveArray.push(JSON.parse(bringJSON))}
   let arrayJson = JSON.stringify(saveArray)
   localStorage.setItem('usuario',arrayJson)
return this.submit()}


//////////////////////////////////LOGIN VALIDATION//////////////////////////////////////
function validarLogin(event){
    event.preventDefault();
    
//////MAIL VALIDATION
var mail=document.getElementById("mailLogin").value
    if(!mail){
            swal('Error',`The email can't be empty 
            \nPlease try again` ,'error')
    return}
    if(!(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail))){
           swal(`Error`,`You have entered an unsupported value\n
           The email format must be  xx@xx.xx
           \n Please try again`,`error`)
    return;}      
//////PASSWORD VALIDATION
var passwordLogin=document.getElementById("passwordLogin").value
   if(!passwordLogin){
           swal('Error',`The password can't be empty
           \nPlease try again` ,'error')
   return;}
   if(!(/^[a-zA-Zn-Ñ0-9]+$/g.test(passwordLogin))){
           swal(`Error`,`You have entered an unsupported value\n
           The password format must only contain letters and numbers.
           \n Please try again`,`error`)
   return}
   if(typeof passwordLogin!=="string"){
           swal('Error',`The password cannnot be only numeric.
           \nPlease try again` ,'error')
   return}
   if(passwordLogin.length<6){
           swal('Error',`The password must contain at least 6 characters
           \nPlease try again` ,'error')
   return;}
           
if(loginValidation(mail,passwordLogin))return this.submit()}


function loginValidation(mail,passwordLogin){
  let loginUser=new LoginUser;
  loginUser.userMail=mail
  loginUser.password=passwordLogin
  showLocalStorage(loginUser)}

/////////Validacion Log In con datos guardados en LocalStorage/////////////////
function showLocalStorage(loginUser){
  let fromCache=localStorage.getItem("usuario")
  let clientStoraged=JSON.parse(fromCache)
     for (let i=0;i<clientStoraged.length;i++){
        if(loginUser.userMail===clientStoraged[i].mail){
            if (loginUser.password===clientStoraged[i].password){
                swal({
                    title: "Sucess",
                    text: `The form has been successfully submitted 
                    \nIn a moment you will be redirected to the main website`,
                    icon: `success`,
                    button: true,})
                    .then((exitoLogin)=>{
                        if(exitoLogin){
                            location.replace("./main.html");
                        }
                    })
            return}
            else{swal('Error',`The password inserted doesnt't belong to a registered mail. 
            \nPlease try again!` ,'error')}}
        else{   swal('Error',`The information doesn't belong to a valid mail/password. 
                \nPlease try again `,'error')}
        return;}}
                
            

               
