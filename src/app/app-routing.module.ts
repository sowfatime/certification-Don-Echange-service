import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/page-user/accueil/accueil.component';
import { AProposComponent } from './composants/page-user/a-propos/a-propos.component';
import { CommentCaMarcheComponent } from './composants/page-user/comment-ca-marche/comment-ca-marche.component';
import { ArticlesComponent } from './composants/page-user/articles/articles.component';
import { ConditionUtilisationComponent } from './composants/page-user/condition-utilisation/condition-utilisation.component';
import { ConfidentialiteComponent } from './composants/page-user/confidentialite/confidentialite.component';
import { ContactComponent } from './composants/page-user/contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UtilisateurComponent } from './dashboard-admin/utilisateur/utilisateur.component';
import { RolesComponent } from './dashboard-admin/roles/roles.component';
import { AnnonceComponent } from './dashboard-admin/annonce/annonce.component';
import { SidebarComponent } from './layout/navbar/sidebar/sidebar.component';
import { AcceuilAdminComponent } from './dashboard-admin/acceuil-admin/acceuil-admin.component';



const routes: Routes = [
  {path : '', redirectTo :  'accueil', pathMatch : 'full',},
  { path: "accueil", component: AccueilComponent,} ,
  { path: "a-propos", component: AProposComponent,},
  { path: "CommentCaMarche", component: CommentCaMarcheComponent,},
  { path: "article", component: ArticlesComponent},
  { path: "ConditionUtilisation", component: ConditionUtilisationComponent,},
  { path: "confidentialite", component: ConfidentialiteComponent,},
  {path: "Contact", component: ContactComponent,},
  { path:"auth" , component: AuthComponent},
  { path:"login", component: LoginComponent,},
  { path: "navbar", component: NavbarComponent},
  { path: "utilisateur",component: UtilisateurComponent},
  { path: "roles", component: RolesComponent},
  { path: "Annonce", component: AnnonceComponent},
  { path: "article", component: ArticlesComponent},
  { path: "sidebar", component: SidebarComponent},
  { path: "acceuil-admin",component: AcceuilAdminComponent}




     


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
