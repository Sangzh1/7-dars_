import { validateRegister ,getData} from "./function.js";

const button = document.getElementById("button");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const repassword = document.getElementById("repassword");
const form = document.getElementById("form");



button && button .addEventListener("click",function(e){
     e.preventDefault();
     const isValid = validateRegister(name,surname,email,age,password,repassword,form);
     if (isValid){
          const User = name; name.value;
          surname = surname; surname.value,
          age = age ; age.value,
          email = email ; email.value,
          password =  password ; password : password,
          username = username ; username.value ,
          repassword = repassword ; repassword.value ,
          form = form ; form.value;

     }
let users = getData ();
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users))
form.reset();
let index = window.location.href.search('pages');
let baseUrl = window.location.href.substring(0,index);
console.log(baseUrl);
     window.location.assign("${baseUrl}pages/login.html");
})
