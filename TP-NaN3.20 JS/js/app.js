function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




 var status_email= 0; var status_tel = 0; var status_nom = 0; var status_prenom = 0;
 var status_pass1 = 0;  

 /* -------------------------------------------- FIRST NAME ---------------------------------------------*/
   var firstname = document.querySelector(".firstname");

        firstname.addEventListener('blur', function(){
            var long = this.value.length;
            if(long < 3){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                this.style.border ="1px solid red";
            }else{
                var reGex_name = /[^A-Za-z]/;

                var nom_val = reGex_name.test(this.value);
                if(nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_nom = 0;
                }
                else{
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                    status_nom = 1; 
                }
            }     
        })



/* -------------------------------------------- LAST NAME ---------------------------------------------*/
 var lastname = document.querySelector(".lastname");///prenoom form2

        lastname.addEventListener('blur', function(){
            var long = this.value.length;
            if(long < 3){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" > ';
                this.style.border ="1px solid red";

            }else{
                var reGex_name = /[^A-Za-z]/;

                var nom_val = reGex_name.test(this.value);
                if(nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_prenom == 0; 
                }
                else{
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                   status_prenom == 1; 
                }
            }     
        })
/* ---------------------------------------------   EMAIL -----------------------------------------------*/
var email = document.querySelector('#email');
email.addEventListener('blur', function(){
     var email_test = this.value;
     var reGex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
     if(!reGex_email.test(email_test)){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
       status_email == 0;
         
     }else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';
         status_email = 1;  

     }

})
/* --------------------------------------------TELEPHONE -----------------------------------------*/
var telephone = document.querySelector('#telephone');
telephone.addEventListener('blur', function(){
 var tel_test = this.value;
 var reGex_tel = /[^0-9]/;
 if(tel_test.length != 8){
     this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
     this.style.border ="1px solid red";
 }else{
     if(reGex_tel.test(tel_test)){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_tel = 0;
      }else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';
         status_tel = 1;
      }
 }
 
})

/* ---------------------------------------------- PASSWORD ---------------------------------------------*/
var password1 = document.querySelector('.password1');
    password1.addEventListener('blur', function(){
        if(this.value.length < 8){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_password1 = 0;
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';  
         status_password1 = 1; 
        }
    })

    /* ------------------------------------------FORMULAIRE-------------------------------------------------*/
 var button = document.querySelector('.connexion');
   button.addEventListener('click', validateMyForm);
   function validateMyForm(){
    if(status_nom == 1 && status_password1 == 1 && status_tel == 1 && status_email == 1 ){
        document.querySelector(".connexion").disabled = false;
        window.open('img/content3.png');
        return true;
    }else{
        document.querySelector('.connexion').disabled = false;
        alert('Veillez remplir correctement tous les champs du formulaire');
    return false; 
    }
   }