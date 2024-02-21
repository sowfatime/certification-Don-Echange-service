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
import { AcceuilAdminComponent } from './dashboard-admin/acceuil-admin/acceuil-admin.component';
import { RolesComponent } from './dashboard-admin/roles/roles.component';
import { UtilisateurComponent } from './dashboard-admin/utilisateur/utilisateur.component';
import { AuthGuardAdmin, AuthGuardUser } from './services/gard';





const routes: Routes = [
  {path : '', redirectTo :  'accueil', pathMatch : 'full',},
  { path: "accueil", component: AccueilComponent,} , // Pour tous
  { path: "a-propos", component: AProposComponent,},
  { path: "CommentCaMarche", component: CommentCaMarcheComponent,},
  { path: "article", component: ArticlesComponent},
  { path: "ConditionUtilisation", component: ConditionUtilisationComponent,},
  { path: "Confidentialite", component: ConfidentialiteComponent,},
  {path: "Contact", component: ContactComponent,},
  { path:"auth" , component: AuthComponent},
  { path:"login", component: LoginComponent,},
  { path: "navbar", component: NavbarComponent},
  { path: "articles", component: ArticlesComponent},
  { path: "aceuil-admin", component: AcceuilAdminComponent},
  { path: "roles", component:RolesComponent},
  { path: "utilisateur", component:UtilisateurComponent},






  
{
  path: 'admin',
  loadChildren: () =>
    import('./dashboard-admin/admin.module').then((m) => m.AdminModule),
  canActivate: [AuthGuardAdmin]


},

{
  path: 'user',
  loadChildren: () =>
    import('./dashboard-user/dashboard-user.module').then((m) => m.DashboardUserModule),
    canActivate: [AuthGuardUser]
    
}, 

       


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
