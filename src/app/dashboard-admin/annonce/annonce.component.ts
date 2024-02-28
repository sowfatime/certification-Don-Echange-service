import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { CategorisService } from 'src/app/services/categories/categoris.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

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
  userConnected: any;
  description!: string;
  libelle!: string;
  etat!: string;
  categorie!: string;
  type!: string;
  localite!: string;
  date_limite!: string;
  image: any=[] // Modified
  annocesData: any;


  detailannonce:any;
  detailannonceimage:any;
  detailannoncedescription:any;
  detailannonceetat:any;
  detailannoncetype:any;
  detailannoncecategorie:any;
  detailannoncelocalite:any;
  detailannoncedate_limite:any;
  username:any



  constructor(private userService:UserService, private annonceService:AnnoncesService, private categorieService : CategorisService){}
  ngOnInit(): void {
   this.listeAnnonce();
   this.afficherAnnonces();
   this.afficherCategore();
   this.afficherlocalites();
  }
  listeAnnonce(){
    this.annonceService.getAnnonceAdmin().subscribe((response:any)=>{
      console.log(response);
      this.annonce = response.data
      console.log('tqkdh',this.annonce)
    })
  }

  // afficher categories
  dataCategorie: any;
  afficherCategore(): void {
    this.categorieService.getCategories().subscribe((data) => {
      this.dataCategorie = data.datas;
      console.log("voir categories", this.dataCategorie);
    });
  }

  
  // afficher localite
  dataLocalites: any;
  afficherlocalites(): void {
    this.categorieService.getLocalites().subscribe((respons) => {
      this.dataLocalites = respons.datas;
      console.log("voir localite", this.dataLocalites);
    });
  }

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
      confirmButtonColor: '#017D03',
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
getFile(event: any): void {
  console.warn(event.target.files[0]);
  this.image = event.target.files[0] as File;
  console.warn("l'image inserer",this.image);
}

}
