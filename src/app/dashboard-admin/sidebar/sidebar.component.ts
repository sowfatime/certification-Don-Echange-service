import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private route:Router){}

// status = false;
// addToggle()
// {
//   this.status = !this.status;       
// }



  logout(){
    localStorage.removeItem('access_token');
    this.route.navigate(['/login']);
    localStorage.setItem("isUser", JSON.stringify(false));
    localStorage.setItem("isAdmin", JSON.stringify(false)); 
  }
}
