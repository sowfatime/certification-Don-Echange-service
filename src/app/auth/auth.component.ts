import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../authservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  name: string="";
  email: string = "";
  telephone:string="";
  photo: any;
  password: string="";
  route: any;
  emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  // emailRegex=/^[A-Za-z]+[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  emailRegex =/^[A-Za-z]+[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+.[A-Za-z]{2,}$/;


ngOnInit(): void {
}
constructor(private authService: AuthServiceService) { }

// Fonction pour afficher un sweetalert
alertMessage(icon: any, title: any, text: any) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
}

// inscription(){

//   if (this.name == '') {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Merci de renseigner votre nom complet!'
//       );
//   } else if (this.name.length < 5) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Le nom doit contenir au moins 5 caractères!'
//     );
//   }
//   else if (this.email == '') {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Merci de renseigner votre email!'
//     );
//   } else if (!this.email.match(this.emailPattern) && !this.email.includes('.')) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Le format de l\'email est incorrect!!'
//     );
//   }else if (!this.email.match(this.emailRegex)) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Le format de l\'email est incorrect!'
//     );
//   } else if (this.password == '') {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Merci de renseigner le mot de passe!'
//     );
//   } else if (/\s/.test(this.password)) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       "Le mot de passe ne doit pas contenir d'espaces!"
//     );
//   } else if (this.password.length < 10) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'le mot de passe doit etre supérieur ou égal à 10!'
//     );
//   }else if (this.telephone == '') {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Merci de renseigner votre numéro de téléphone!'
//     );
//   } else if (/\s/.test(this.telephone)) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       "Le numéro de téléphone ne doit pas contenir d'espaces!"
//     );
//   } else if (!this.telephone.match(/^(\+221|221)?[76|77|78|70|33]\d{8}$/)) {
//     this.alertMessage(
//       'error',
//       'Attention',
//       'Le format du numéro de téléphone est invalide!'
//     );
//   } else if(this.photo==''){
//     this.alertMessage(
//       'error',
//       'Attention',
//       'merci d\'ajouter une photo!'
//     );

//   } else {
//     const data = {
//       name : this.name,
//       telephone : this.telephone,
//       email : this.email,
//       photo : this.photo,
//       password : this.password,
//     }
//     this.authService.singin(data).subscribe(
//       (data) => {
//         console.log(data);
//       },
//             this.route.navigate(['/utilisateur'])
  
//     )
//   }

// }

afficherFrmConnexion() {
throw new Error('Method not implemented.');
}
role: any;
exactRole: any;
verifRole: any;
statut: any;

// exactNomexactnomcomplet: any;
// exactnomcomplet: any;
// verifNom: any;
// exactEmail: any;
// verifEmail: any;
// email: any;
// password: any | undefined | undefined;
// exactPassword: any;
// verifPassword: any;
// onInscrire() {
// throw new Error('Method not implemented.');
// }
showFrmConnexion: any;


// inserer l'image
getFile(event: any) {
  console.log('img',this.photo)
  console.warn(event.target.files[0]);
  this.photo = event.target.files[0] as File;
}

//methode pour inscription user
onInscrire() : void{
  if (this.name == '') {
    this.alertMessage(
      'error',
      'Attention',
      'Merci de renseigner votre nom complet!'
      );
  } else if (this.name.length < 5) {
    this.alertMessage(
      'error',
      'Attention',
      'Le nom doit contenir au moins 5 caractères!'
    );
  }
  else if (this.email == '') {
    this.alertMessage(
      'error',
      'Attention',
      'Merci de renseigner votre email!'
    );
  } else if (!this.email.match(this.emailPattern) && !this.email.includes('.')) {
    this.alertMessage(
      'error',
      'Attention',
      'Le format de l\'email est incorrect!!'
    );
  }else if (!this.email.match(this.emailRegex)) {
    this.alertMessage(
      'error',
      'Attention',
      'Le format de l\'email est incorrect!'
    );
  } else if (this.password == '') {
    this.alertMessage(
      'error',
      'Attention',
      'Merci de renseigner le mot de passe!'
    );
  } else if (/\s/.test(this.password)) {
    this.alertMessage(
      'error',
      'Attention',
      "Le mot de passe ne doit pas contenir d'espaces!"
    );
  } else if (this.password.length < 8) {  
    this.alertMessage(
      'error',
      'Attention',
      'le mot de ppasse doit etre supérieur ou égal à 8!'
    );
  }else if (this.telephone == '') {
    this.alertMessage(
      'error',
      'Attention',
      'Merci de renseigner votre numéro de téléphone!'
    );
  } else if (/\s/.test(this.telephone)) {
    this.alertMessage(
      'error',
      'Attention',
      "Le numéro de téléphone ne doit pas contenir d'espaces!"
    );
  } else if (!this.telephone.match(/^(\+221|221)?[76|77|78|70|33]\d{8}$/)) {
    this.alertMessage(
      'error',
      'Attention',
      'Le format du numéro de téléphone est invalide!'
    );
  } else if(this.photo==''){
    this.alertMessage(
      'error',
      'Attention',
      'merci d\'ajouter une photo!'
    );

  }
  else {
  let formData = new FormData();
  formData.append("name", this.name);
  formData.append("email", this.email);
  formData.append("telephone", this.telephone);
  formData.append("photo", this.photo);
  formData.append("password", this.password);
  console.log('bjr',formData)

  this.authService.singin(formData).subscribe(
    (rep: any)=>{
      console.log('réussi',rep) 
    },
  (error: any) => {
    console.error('erreur',error);
  }
  )
    this.verifierChamps('Félicitation!', 'inscription réussie', 'success');
    this.viderChamps();

  }
}
 
 // Méthode pour afficher un sweetalert2 apres vérification
 verifierChamps(title:any, text:any, icon:any) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}
viderChamps(){
  // On vide les valeurs des champs input
  this.name = "";
  this.email = "";
  this.password = "";
  this.photo = "";
  this.telephone = "";
}


}

