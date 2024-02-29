import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn :any; 
  loggedOut :any;

  constructor(private route:Router){
  }
  
  
  ngOnInit(): void {
    if (localStorage.getItem('access_token') != null) {
      this.loggedIn = true;
      this.loggedOut = false;
    } else {
      this.loggedIn = false;
      this.loggedOut = true;

    }
  }


  logout(){
    localStorage.removeItem('access_token');
    this.route.navigate(['/accueil']);
    this.ngOnInit();
    localStorage.setItem("isUser", JSON.stringify(false));
    localStorage.setItem("isAdmin", JSON.stringify(false)); 
  }
  



}
