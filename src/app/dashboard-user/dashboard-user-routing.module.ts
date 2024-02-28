import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponent } from './main-user/main-user.component';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DonComponent } from './don/don.component';
import { EchangesComponent } from './echanges/echanges.component';
import { ProfilComponent } from './profil/profil.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { ArticlesComponent } from './articles/articles.component';



const routes: Routes = [

  {
    path: '',
    component: MainUserComponent,
    children: [
      { path: "accueilUser", component: DashUserComponent },
       { path: "ArticlesUser", component: ArticlesComponent},
      { path: "accueil_user", component: AcceuilUserComponent },
      { path: "annonces", component: AnnoncesComponent},
      // { path: "articles",component: ArticlesComponent},
      { path: "dons",component: DonComponent},
      { path: "echanges",component:EchangesComponent},
      { path: "profil",component:ProfilComponent },
      { path: "", redirectTo: "accueilUser", pathMatch: "full"}
	]
}

 








  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
