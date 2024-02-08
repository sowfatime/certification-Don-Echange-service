import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RolesComponent } from './roles/roles.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { LocaliteComponent } from './localite/localite.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { NavbarComponent } from '../layout/navbar/navbar.component';


@NgModule({
  declarations: [
    MainAdminComponent,
    UtilisateurComponent,
    RolesComponent,
    AnnonceComponent,
    ArticleComponent,
    CategorieComponent,
    CommentaireComponent,
    LocaliteComponent,
    NewsletterComponent,
    AcceuilAdminComponent,
    NavbarComponent,
    SidebarComponent
    // NavbarComponent,

  ],
  imports: [CommonModule, RouterModule, AdminRoutingModule, FormsModule],
})
export class AdminModule { }
