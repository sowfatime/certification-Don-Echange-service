import { Component } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces/annonces.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategorisService } from 'src/app/services/categories/categoris.service';

@Component({
  selector: 'app-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticlesComponent {
[x: string]: any;
  userConnected: any;
  listeAnnonce: any[] = [];
  Articleliste: any = {};
  libelle:string ="";
  contenu:string ="";
  image:any;
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(private annonceService: AnnoncesService, private categorieService: CategorisService,private articleService:ArticlesService) { } // Modified

  ngOnInit(): void {
    this.userConnected = JSON.parse(localStorage.getItem('userConnected') || "");
    // this.getAnnonce(this.userConnected.id);
    this. listeArticles();
  }
    

  // getAnnonce(id: number): void { // liste annonce de l utilisateur
  //   this.annonceService.getAnnonceByUserConnected(id).subscribe(
  //     (response) => {
  //       console.log('backend response', response);

  //       this.listeAnnonce = response.datas;
  //       this.listeAnnonce = response.datas;
  //       console.log(this.listeAnnonce);
  //     }
  //   );
  // }

  ajouArticle() : void{
    let formData = new FormData
    formData.append('libelle' ,this.libelle);
    formData.append('contenu', this.contenu);
    formData.append('image', this.image);
    this.articleService.ajouterArticle(formData).subscribe((respon)=>{
      console.log("voir articel", respon)
    })
  }

  listeArticles(){
    this.articleService.getArticle().subscribe(
      (response) => {
        console.log('backend response articletyghgjhgh', response);

        this.Articleliste = response.datas;
        
        // console.log(this.Articleliste);
        // console.log(this.Articleliste.libelle);
        
      }
    );
  }

    // ajouter article
    onSubmit(): void {
      let formData = new FormData();
      formData.append('libelle', this.libelle);
      formData.append('contenu', this.contenu);
   
      if(this.image){
        formData.append('image[]', this.image);
  
      }
      console.warn( "jh",formData);
      this.articleService.ajouterArticle(formData).subscribe((response) => {
        console.log("voici la reponse",response);
      });
      this.ngOnInit();
      this.viderChamp();
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

}
