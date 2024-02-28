import { Component, OnInit } from '@angular/core';
import { CategorisService } from 'src/app/services/categories/categoris.service';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import Swal from 'sweetalert2';
import { LocalitesService } from 'src/app/services/localites/localites.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit{
  localiteservice: any;
datatypeAnnonce: any;
typeAnnonce: any;
Types: any;
stopPropagation($event: MouseEvent) {
throw new Error('Method not implemented.');
}
  selectedAnnonce: any;
  annonceData: any;
  annonceImages: any[]= [];


  tabAnnonce: any[] = []
images: any;
user: any;
photo: any;
loggedIn:any;
loggedOut:any;

  ngOnInit(): void {
    if (localStorage.getItem('access_token') != null) {
      this.loggedIn = true;
      this.loggedOut = false;
    } else {
      this.loggedIn = false;
      this.loggedOut = true;
    }
    // 
    this. afficherAnnonces();
    this.afficherCategore();
    this.afficherlocalites();
   }

  
   
   
  constructor(private annonceService: AnnoncesService, private categoriservice : CategorisService, private locatiteservice : LocalitesService,private route:Router ){}
  // Afficher toutes les annonces
  afficherAnnonces(){
  this.annonceService.getAnnonce().subscribe(
    (response: any) =>{
      console.log("liste reponse",response);
      this.tabAnnonce = response.data;
      console.log("liste reponse tableau",this.tabAnnonce);
    }
  )
  }
  dataCategorie : any;
  afficherCategore(): void{
    this.categoriservice.getCategories().subscribe((data)=>{
      this.dataCategorie = data.datas
      console.log("voir categories", this.dataCategorie);
    })

    

  }
 dataLocalites : any;
  afficherlocalites(): void{
    this.categoriservice.getLocalites().subscribe((respons)=>{
      this.dataLocalites = respons.datas;
      console.log("voir localite", this.dataLocalites);
    })
  }
  //  ..........
  affichertypes(): void{
    this.annonceService.getAnnonce().subscribe((respons)=>{
      this.typeAnnonce = respons.datas;
      console.log("voir type abonce", this.typeAnnonce);
    })
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

  redirect() {
    if (this.loggedIn) {
      this.route.navigate(['user/accueilUser'])
    } else {
     Swal.fire({
       position: 'center',
       icon: 'success',
       title: '',
       text: 'Connectez vous pour avoir accces a cet espace',
       showConfirmButton: true,
     });

    }
  }

}

