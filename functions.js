import {monotributesCategories} from '/assets/js/variables.js';
import {Accountant} from '/assets/js/variables.js';

let dataLocalStorage=localStorage.getItem("usuario")
export let dataParseLocalStorage=JSON.parse(dataLocalStorage)

//Instantiation of array where Clients are save

let listOfAccountants=[];
export const functionsFinalWork={
  defineCategoryMonotribute,
  formValidation,
darkLightMode}

//////////FUNCTIONS FOR ADDING A CATEGORY TO A CLIENT
function defineCategoryMonotribute(accountant){
    if (accountant.totalIncome===0)return;
    if (accountant.totalIncome<466201){
         accountant.cat="A"
         saveAccountant(accountant)}
    else if(accountant.totalIncome>=3276011){
         accountant.cat="H"
         saveAccountant(accountant)}
    else{
for (let i=1;i<monotributesCategories.length-1;i++){

    if (accountant.totalIncome>=monotributesCategories[i-1].maxIncome&&
        accountant.totalIncome<monotributesCategories[i+1].maxIncome)
       {accountant.cat=monotributesCategories[i].category
        saveAccountant(accountant)
    break;}}}}
////FUNCTION FOR SAVING///////////
function saveAccountant(accountant){
      listOfAccountants.push(accountant)}
  //////////////////////////

export function formValidation(ev) {
  ev.preventDefault()
  let accountant= new Accountant();
  accountant.name=dataParseLocalStorage[0].name
  accountant.mail=dataParseLocalStorage[0].mail
  accountant.password=dataParseLocalStorage[0].password
  accountant.user=dataParseLocalStorage[0].username
 let form = ev.target;
//Asignation of values of object Accountant
  accountant.clientName=form.children[0].value
  accountant.totalIncome=form.children[1].value
  /// Definition of accountant´s client category 
  functionsFinalWork.defineCategoryMonotribute(accountant)
  ///DOM for printing the List on HTML
  const $father=document.getElementById("clientes")

    let li=document.createElement("li")
    li.innerHTML=`<h5>Your client ${accountant.clientName} 
    with annual income of $  ${accountant.totalIncome} 
    must be categorized on the Category " ${accountant.cat} "</h5><hr>`
    $father.appendChild(li)}




export function darkLightMode(){
  const $bodyDom=document.body
  $bodyDom.classList.toggle("darkmode")}
