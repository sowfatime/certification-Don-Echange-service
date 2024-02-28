import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RolesComponent } from './roles/roles.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocaliteComponent } from './localite/localite.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './article/article.component';



@NgModule({
  declarations: [  
    MainAdminComponent,
    UtilisateurComponent,
    RolesComponent,
    AnnonceComponent,
    CategorieComponent,
    CommentaireComponent,
    LocaliteComponent,
    NewsletterComponent,
    AcceuilAdminComponent,
    NavbarComponent,
    SidebarComponent,
    ArticlesComponent
    // NavbarComponent,

  ],
  imports: [CommonModule, RouterModule, AdminRoutingModule, FormsModule,HttpClientModule],
})
export class AdminModule { }
