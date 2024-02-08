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
 
  ngOnInit(): void {

  }

  constructor(private authen: AuthServiceService
              ,private router : Router          
    ) { }
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
      (response : any) => {
        console.log("voir", response);
      
        if(response.access_token){
          if( response.role == 1 &&  response.is_bloqued == 0){
          
            console.log("fffffffff", response.access_token);
            localStorage.setItem('tokenstorage', response.access_token);
            // this.router.navigate(['/accueil']);
          }
          else if(response.role == 2 &&  response.is_bloqued == 0 ){
            console.log("fffffffff", response.access_token);
            localStorage.setItem('tokenstorage', response.access_token);
          this.router.navigate(['/accueil']);
          }
          else{

          }
        }
        else{

        }
      

      });

 

  }
  viderChamps() {
    throw new Error('Method not implemented.');
  }
  verifierChamps(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
}
