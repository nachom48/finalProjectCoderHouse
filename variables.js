
//Definition of categories as objects in a single array.





export let monotributesCategories=[]


fetch('/assets/js/database.json')
.then((response)=>response.json())
.then((data)=>{
return monotributesCategories=data
    
  })




//Instantiation of Accountant Class with attributes.

export class Accountant {
      constructor(name,mail,user,password,clientName,totalIncome,cat){
      this.name=name;
      this.user=user;
      this.mail=mail;
      this.password=password;
      this.totalIncome=totalIncome;
      this.cat=cat;
      this.clientName=clientName
  }}

  export class LoginUser{
    constructor(userMail,userPassword){
      this.userMail=userMail,
      this.password=userPassword
    }
  }