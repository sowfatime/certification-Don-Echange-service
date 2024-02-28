import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from 'src/app/services/roles/role-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
libelle: string= "";
  ngOnInit(): void {
   
  }
  constructor(private roleservice : RoleServiceService){}
  ajouterRole(): void{
  const  newRole = {
       libelle : this.libelle,
    }
    this.roleservice.addRole(newRole).subscribe((respons)=>{
      console.log("voir ajout", respons);
    })
  }

}
