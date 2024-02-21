import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
[x: string]: any;
  annonce: any;
  tabAnnonce: any[] = [];
  images: any;
  user: any;
  photo: any;




  constructor(private userService:UserService, private annonceService:AnnoncesService){}
  ngOnInit(): void {
   this.listeAnnonce();
  }
  listeAnnonce(){
    this.annonceService.getAnnonceAdmin().subscribe((response:any)=>{
      console.log(response);
      this.annonce=response.datas
      console.log('tqkdh',this.annonce)
    })
  }

}
