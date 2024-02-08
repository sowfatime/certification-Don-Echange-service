import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RolesComponent } from './roles/roles.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ArticleComponent } from './article/article.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { LocaliteComponent } from './localite/localite.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MainAdminComponent } from './main-admin/main-admin.component';

const routes: Routes = [

  {
    path: '',
    component: MainAdminComponent,
    children: [
      { path: 'accueil_admin', component: AcceuilAdminComponent },
      { path: "utilisateur",component: UtilisateurComponent},
      { path: "roles", component: RolesComponent},
      { path: "annonces", component: AnnonceComponent},
      { path: "article",component: ArticleComponent},
      { path: "categorie",component: CategorieComponent},
      { path: "commentaire",component: CommentaireComponent},
      { path: "localite",component:LocaliteComponent },
      { path: "newsletter",component:NewsletterComponent },
      { path: "", redirectTo: "accueil_admin", pathMatch: "full"}
	]
}

 








  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  
  exports: [RouterModule]
})
export class AdminRoutingModule { }
