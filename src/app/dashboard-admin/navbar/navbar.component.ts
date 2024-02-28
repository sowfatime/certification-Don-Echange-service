import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  tabAnnonce: any;
constructor(private annonceService:AnnoncesService){}
  ngOnInit(): void {
    this.afficherAnnonces();
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

//   status = false;
// addToggle()
// {
//   this.status = !this.status;       
// }

 // Afficher toutes les annonces
 afficherAnnonces() {
  this.annonceService.getAnnonce().subscribe(
    (response: any) => {
      console.log("liste reponse", response);
      this.tabAnnonce = response.data;
      console.log("liste reponse tableau", this.tabAnnonce);
    }
  )
}
}
