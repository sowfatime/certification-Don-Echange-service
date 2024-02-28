import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilUserComponent } from '../acceuil-user/acceuil-user.component';
// import { MainUserComponent } from '../main-user/main-user.component';
import { AnnoncesComponent } from '../annonces/annonces.component';
import { ArticlesComponent } from 'src/app/composants/page-user/articles/articles.component';
import { DonsComponent } from '../dons/dons.component';
import { EchangesComponent } from '../echanges/echanges.component';
import { ProfilComponent } from '../profil/profil.component';
// import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [

  {
    path: '',
    // component: MainUserComponent,
    children: [
      { path: 'accueil_users', component: AcceuilUserComponent },
      { path: "annonces", component: AnnoncesComponent},
      { path: "articles",component: ArticlesComponent},
      { path: "dons",component: DonsComponent},
      { path: "echanges",component:EchangesComponent},
      { path: "profil",component:ProfilComponent },
      // { path:"navbar",component:NavbarComponent},
      // { path:"main-user",component:MainUserComponent},

      { path: "", redirectTo: "accueil_users", pathMatch: "full"}
	]
}

 








  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  
  exports: [RouterModule]
})
export class usersRoutingModule { }
