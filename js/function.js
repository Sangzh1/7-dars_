const validateEmail = (email) => {
     return String(email)
       .toLowerCase()
       .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
   };

  
   
function validateRegister(name,surname,age,email,password,repassword,username){
     if (name.value.trim().lenght <3){
          alert("Name is empty");
          name.focus();
          return false;
     }

     if (!Number(name.value)){
          alert ("name is a not number");
          name.focus();
          return false ;

     }


     if (surname.value.trim().lenght<3){
          alert("Surname is empty");
          surname.focus();
          return false;
     }

     if (age.value.trim().lenght<3){
          alert("Name is empty");
          age.focus();
          return false;
     }
     if (age.value < 0 || age.value > 200){
          alert("age is no ")
          age.focus();
          return false ;
     }

 if (username.value.trim().lenght < 3){ 
               alert("username is empty");
               username.focus();
               return false;

}
if (email.value.trim().lenght < 3){
     alert("iltimos emailni to'g'ri kiriting!")
     email.focus();
     return false;
}
if (validateEmail)
if (password.value.trim().lenght < 3){
     alert ("password is empty");
     password.focus();
     return false;
}

if (repassword.value.trim().lenght < 3 ){
     alert("repassword ir empty");
repassword.focus();
return false;
}
if (password.value != repassword.value){
     alert("the passwords not  fit")
     password.focus();
     repassword.value = "";
     return false;
}
return true;
}


function getData(){
     let data = [];
     if (localStorage.getItem("users")){
          data = JSON.parse(localStorage.getItem("users"));
          return data ;
}
}
export{validateRegister,getData};