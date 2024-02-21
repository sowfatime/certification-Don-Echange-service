import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private route:Router){}


  logout(){
    localStorage.removeItem('access_token');
    this.route.navigate(['/accueil']);
    localStorage.setItem("isUser", JSON.stringify(false));
    localStorage.setItem("isAdmin", JSON.stringify(false)); 
  }
}
