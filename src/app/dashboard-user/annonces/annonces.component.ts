import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { CategorisService } from 'src/app/services/categories/categoris.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  userConnected: any;
  listeAnnonce: any[] = [];
  tabAnnonce: any[] = [];
  description!: string;
  libelle!: string;
  etat!: string;
  categorie!: string;
  type!: string;
  localite!: string;
  date_limite!: string;
  image: any=[] // Modified
  annocesData: any;

  constructor(private annonceService: AnnoncesService, private categorieService: CategorisService) { } // Modified

  ngOnInit(): void {
    this.userConnected = JSON.parse(localStorage.getItem('userConnected') || "");
    this.getAnnonce(this.userConnected.id);
    this.afficherCategore();
    this.afficherlocalites();
  }

  dataLocalites: any;
  afficherlocalites(): void {
    this.categorieService.getLocalites().subscribe((respons) => {
      this.dataLocalites = respons.datas;
      console.log("voir localite", this.dataLocalites);
    });
  }

  getAnnonce(id: number): void { // Modified
    this.annonceService.getAnnonceByUserConnected(id).subscribe(
      (response) => {
        console.log('backend response', response);

        this.listeAnnonce = response.datas;
        this.listeAnnonce = response.datas;
        console.log(this.listeAnnonce);
      }
    );
  }
  // Afficher toutes les annonces
  afficherAnnonces() {
    this.annonceService.getAnnonce().subscribe(
      (response: any) => {
        console.log("liste reponse", response);
        this.tabAnnonce = response.datas;
        console.log("liste reponse tableau", this.tabAnnonce);
      }
    )
  }

  dataCategorie: any;
  afficherCategore(): void {
    this.categorieService.getCategories().subscribe((data) => {
      this.dataCategorie = data.datas;
      console.log("voir categories", this.dataCategorie);
    });
  }

  // méthode pour la transformation des images
 
  // ajouter annonce
  onSubmit(): void {
    let formData = new FormData();
    formData.append('libelle', this.libelle);
    formData.append('description', this.description);
    formData.append('etat', this.etat);
    formData.append('type', this.type);
    formData.append('categorie_id', this.categorie);
    formData.append('localite_id', this.localite); // Modified
    formData.append('date_limite', this.date_limite);

    console.log(formData);
    if(this.image){
      formData.append('image[]', this.image);

    }
    this.annonceService.ajouterAnnonce(formData).subscribe((response) => {
      console.log("voici la reponse",response);
      // Rest of your code
    });
  }

  getFile(event: any): void {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
    console.warn("l'image inserer",this.image);
  }

}
