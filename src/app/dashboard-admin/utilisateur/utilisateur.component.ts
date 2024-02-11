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
    this.tabUser = respons.Utilisateurs;
    console.log("voir user connecte", this.tabUser);
  })
}

bloqueUser(id: number){
  this.userservice.bloque(id).subscribe(
    (data) => {
      console.log(data)
      this.afficherUser();
    }
  )
}


debloqueUser(id: number){
  this.userservice.debloque(id).subscribe(
    (data) => {
      console.log(data)
      this.afficherUser();
    }
  )
}



}
