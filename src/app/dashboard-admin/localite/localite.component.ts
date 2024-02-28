import { Component, OnInit } from '@angular/core';
import { LocalitesService } from 'src/app/services/localites/localites.service';


@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls: ['./localite.component.css']
})
export class LocaliteComponent implements OnInit {
dataLocalites: any;
  ngOnInit(): void {

    this.afficherlocalites();

  }
  afficherlocalites() {
    throw new Error('Method not implemented.');
  }
  // localiteservice: any;

  // dataLocalites : any;
  // afficherlocalites(): void{
  //   this.localiteservice.getLocalites().subscribe((response)=>{
  //     this.dataLocalites = response.datas;
  //     console.log("voir localite", this.dataLocalites);
  //   })
  // }
}
