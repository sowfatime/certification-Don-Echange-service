import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { CategorisService } from 'src/app/services/categories/categoris.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrls: ['./dash-user.component.css']
})
export class DashUserComponent {
      //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }

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

  constructor(private route:Router,private annonceService: AnnoncesService, private categorieService: CategorisService) { } // Modified

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
    this.ngOnInit();
    this.viderChamp();
    // this.getAnnonce(id); // Actualise la page
  }

  getFile(event: any): void {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
    console.warn("l'image inserer",this.image);
  }

detailannonce:any;
  detailannonceimage:any;
  detailannoncedescription:any;
  detailannonceetat:any;
  detailannoncetype:any;
  detailannoncecategorie:any;
  detailannoncelocalite:any;
  detailannoncedate_limite:any;
  username:any
  

// Voir detail d'une annonce
voirDetailAnnonce(id: number){
  console.log("id de l'element clique",id)
  this.annonceService.getDetailAnnonce(id).subscribe(
    (response: any) => {
      console.log("liste de la reponse",response);//toute la reponse du backend
      console.log("liste de la reponse de l'annonce",response.annonce);//juste les informations de l'annonce
      console.log("liste de la reponse de l'annonce images",response.images);//juste les images de l'annonce
      console.log("infos du propriétaire del'annonce",response.user);//juste les infos du proprietaire
      this.detailannonce= response.annonce;
      this.detailannonceimage= response.images,
      this.detailannoncedescription= response.description,
      this.detailannonceetat= response.etat,
      this.detailannoncecategorie= response.categorie;
      this.detailannoncetype= response.Type;
      this.detailannoncelocalite=response.localite;
      this.detailannoncedate_limite=response.date_limite
      this.username=response.user
      console.log(this.username);
      console.log(response.images);
    },
    (error) => {
      console.error('Une erreur s\'est produite : ', error);
    }
  );
}

// suppression
SupprimeAnnonce(id: number) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière après cette action!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#55a1cc',
    cancelButtonColor: '#FF9C00',
    confirmButtonText: 'Oui, supprimer!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.annonceService.supprimerAnnonce(id).subscribe((response) => {
        this.annonceService.verifierChamp(
          '!!!!',
          response.status_message,
          'success'
        );
        
      });
    }
    this.ngOnInit();
    this.getAnnonce(id); // Actualise la page
  });
  }


// methode pour charger annonce a modifier
annonceSelectionner:any;
chargerInfosTest(annonce: any) {
  this.annonceSelectionner = annonce.id;
  console.log('esxrcdftygu', this.annonceSelectionner);
  this.libelle = annonce.libelle;
  this.description = annonce.description;
  this.type = annonce.type;
  this.etat = annonce.etat;
  this.categorie = annonce.categorie_id;
  this.localite = annonce.localite_id;
  this.image = annonce.images;
  this.date_limite = annonce.date_limite;
 
}

  // fonction pour modifier
  modifierAnnonce() {
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

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#017D03',
      cancelButtonColor: '#FF9C00',
      confirmButtonText: 'Oui, modifie!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.annonceService
          .updateAnnonce(this.annonceSelectionner, formData)
          .subscribe((response) => {
            console.log('je suis response', response);
            this.annonceService.verifierChamp(
              '!!!!',
              response.status_message,
              'success'
            );
            if (response.status_code == 200) {
              
              this.ngOnInit();
              this.viderChamp();
             
            } else {
              this.annonceService.verifierChamp(
                '!!!!',
                response.status_message,
                'success'
              );
            }
            // this.getAllAnnonce();
          });
        this.ngOnInit();
        // window.location.reload();
      }
      console.log('je suis annonce', this.annonceSelectionner);
      console.log('je suis data', formData);
    });
  }

logout(){
  localStorage.removeItem('access_token');
  this.route.navigate(['/login']);
  localStorage.setItem("isUser", JSON.stringify(false));
  localStorage.setItem("isAdmin", JSON.stringify(false)); 
}


viderChamp(){
  this.description ='';
  this.libelle='';
  this.etat='';
  this.categorie='';
  this.type='';
  this.localite='';
  this.date_limite='';
  this.image=[] // Modified
  
}



}
