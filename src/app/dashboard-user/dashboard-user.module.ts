import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { MainUserComponent } from './main-user/main-user.component';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ArticlesComponent } from './articles/articles.component';
import { DonComponent } from './don/don.component';
import { EchangesComponent } from './echanges/echanges.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainUserComponent,
    AcceuilUserComponent,
    AnnoncesComponent,
    ArticlesComponent,
    DonComponent,
    EchangesComponent,
    NavbarComponent,
    ProfilComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    FormsModule,
  ]
})
export class DashboardUserModule { }
