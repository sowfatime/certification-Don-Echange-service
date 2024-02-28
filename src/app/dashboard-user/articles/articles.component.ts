import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategorisService } from 'src/app/services/categories/categoris.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  userConnected: any;
  listeAnnonce: any[] = [];
  Articleliste: any = {};
  libelle:any;
  contenu:any;
  image:any;
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(private annonceService: AnnoncesService, private categorieService: CategorisService,private articleService:ArticlesService,private route:Router) { } // Modified

  ngOnInit(): void {
    this.userConnected = JSON.parse(localStorage.getItem('userConnected') || "");
    this.getAnnonce(this.userConnected.id);
    this. listeArticles();
  }
    

  getAnnonce(id: number): void { // liste annonce de l utilisateur
    this.annonceService.getAnnonceByUserConnected(id).subscribe(
      (response) => {
        console.log('backend response', response);

        this.listeAnnonce = response.datas;
        this.listeAnnonce = response.datas;
        console.log(this.listeAnnonce);
      }
    );
  }

  listeArticles(){
    this.articleService.getArticle().subscribe(
      (response) => {
        console.log('backend response article', response);

        this.Articleliste = response.datas;
        
        console.log(this.Articleliste);
        // console.log(this.Articleliste.libelle);
        
      }
    );
  }

    // ajouter annonce
    onSubmit(): void {
      let formData = new FormData();
      formData.append('libelle', this.libelle);
      formData.append('contenu', this.contenu);
      console.log(formData);
      if(this.image){
        formData.append('image[]', this.image);
  
      }
      this.articleService. ajouterArticle(formData).subscribe((response) => {
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

    viderChamp(){
     
      this.libelle='';
      this.contenu='';
      this.image=[] // Modified
      
    }

    logout(){
      localStorage.removeItem('access_token');
      this.route.navigate(['/login']);
      localStorage.setItem("isUser", JSON.stringify(false));
      localStorage.setItem("isAdmin", JSON.stringify(false)); 
    }

}
