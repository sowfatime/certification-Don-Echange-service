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
      (usere : any) => {
        console.log("voir", usere);
        
            if(usere.access_token){
              if( usere.user.role_id == 2 &&  usere.user.is_bloqued == 0){
              
                console.log("fffffffff", usere.access_token);
                // localStorage.setItem('access_token', JSON.stringify(usere.access_token));
                localStorage.setItem("access_token", JSON.stringify(usere.access_token).replace(/['"]+/g, ''));
                // localStorage.setItem('userConnected', JSON.stringify(usere.user));
                this.router.navigate(['/admin/accueil_admin']);
              }
              else if(usere.user.role == 1 &&  usere.is_bloqued == 0 ){
                console.log("fffffffff", usere.access_token);
                localStorage.setItem('tokenstorage', usere.access_token);
              this.router.navigate(['/accueil']);
              }
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
