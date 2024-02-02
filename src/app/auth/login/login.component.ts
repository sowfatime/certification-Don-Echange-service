import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  showMessage: string | undefined;
  router: any;
  ngOnInit(): void {

  }

  constructor(private authen: AuthServiceService) { }
  // variables pour se connecter
  email = "";
  password: any = "";

  connexion(): void {
    const data = {
      email: this.email,
      password: this.password
    }
    console.log(data);
    this.authen.login(data).subscribe(
      (response) => {
        console.log("voir", response);
        this.router.navigate(['/accueil']);

      });

    // if (this.showMessage == "") {
    //   this.verifierChamps('Champs obligatoire', 'Veuillez remplir les champs', 'error');
    // }
    // else {
    //   this.verifierChamps('Félicitation!', 'Connexion réussie', 'success');
    // }
    // this.viderChamps();



  }
  viderChamps() {
    throw new Error('Method not implemented.');
  }
  verifierChamps(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
}
