import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
tabUser: any;
constructor (private userservice : UserService){}
  ngOnInit(): void {
    this.afficherUser();
  }

afficherUser() :  void{
  this.userservice.getUser().subscribe((respons)=>{
    this.tabUser = respons;
    console.log("voir user connecte", respons);
  })
}

}
