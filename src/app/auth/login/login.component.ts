import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authservice.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  showMessage: string | undefined;
exactemailCon: any;
 
  ngOnInit(): void {
    // Localstorage pour le token 
    if(!localStorage.getItem("access_token")){
      localStorage.setItem("access_token", JSON.stringify(""));
    }
    // Les infos de l'utisateur connecté 
    if(!localStorage.getItem("userConnected")){
      localStorage.setItem("userConnected", JSON.stringify(""));
    }

    // Pour les guard
    // Les infos de l'utisateur connecté 
    if(!localStorage.getItem("isAdmin")){
      localStorage.setItem("isAdmin", JSON.stringify(false));
    }
    // Les infos de l'utisateur connecté 
    if(!localStorage.getItem("isUser")){
      localStorage.setItem("isUser", JSON.stringify(false));
    }
  }

  constructor(private authen: AuthServiceService
              ,private router : Router          
    ) { }
  // variables pour se connecter
  email = "";
  password: any = "";

     // Variables si les champs sont exacts
     exactemail : boolean = false;
     exactpassword : boolean = false;
      
   

  // Fonction pour afficher un sweetalert
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }

  // Vérification de l'email
  verifMessageEmail: string = "";
  isEmailVerified: boolean = false;
  verifEmailFunction(){
    const emailRegex=/^[A-Za-z]+[A-Za-z0-9._%+-]+@+[A-Za-z][A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
    this.isEmailVerified = emailRegex.test(this.email);
    if(!this.email){
      this.verifMessageEmail = "";
    }
    else if(!this.isEmailVerified){
      this.verifMessageEmail = "Le format de l'email est incorrect";
    } else{
        this.verifMessageEmail = "";
        this.isEmailVerified = true;
      }
  }

  verfiMessagePassword = "";
  connexion(): void {

    this.verifEmailFunction();
    const data = {
      email: this.email,
      password: this.password
    }
    console.log(data);
    if (this.email == '') {
      // this.alertMessage('error', 'Attention', "Renseigner l'email");
      this.verifMessageEmail = "Renseigner l'email"
        } else if (this.password == '') {
          //  this.alertMessage('error', 'Attention', 'Renseigner le mot de passe');
           this.verfiMessagePassword = "Renseigner le mot de passe"
       }else if(this.isEmailVerified){
        this.authen.login(data).subscribe(
          (usere ) => {
            console.log("voir", usere);
            
                if(usere.access_token){
                  if( usere.user.role_id == 2 &&  usere.user.is_bloqued == 0){
                  
                    console.log("fffffffff", usere.access_token);
                    localStorage.setItem("access_token", JSON.stringify(usere.access_token).replace(/['"]+/g, ''));
                    this.router.navigate(['/admin']);
                    // C'est l'admin qui est connecté
                    localStorage.setItem("isAdmin", JSON.stringify(true)); 
                    localStorage.setItem("isUser", JSON.stringify(false));
                  }
                  else if(usere.user.role_id  == 1 &&  usere.user.is_bloqued == 0 ){
                    console.log("fffffffff", usere.access_token);
                    localStorage.setItem("access_token", JSON.stringify(usere.access_token).replace(/['"]+/g, ''));
                    localStorage.setItem('userConnected', JSON.stringify(usere.user));

                    this.router.navigate(['/accueil']);
                    // C'est l'utilisateur qui est connecté
                    localStorage.setItem("isUser", JSON.stringify(true));
                    localStorage.setItem("isAdmin", JSON.stringify(false)); 
                  }
                }
        
          },
          (err:any) => {
            console.log("voir les erreurs");
            console.log(err.error.message);
           this.alertMessage('error', 'Attention', err.error.message);
          }
        );
    

       }


 

  }
  viderChamps() {
    throw new Error('Method not implemented.');
  }
  verifierChamps(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
}
