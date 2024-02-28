// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { MainUserComponent } from './main-user/main-user.component';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DonComponent } from './don/don.component';
import { EchangesComponent } from './echanges/echanges.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { DashUserComponent } from './dash-user/dash-user.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    MainUserComponent,
    AcceuilUserComponent,
    AnnoncesComponent,
    DonComponent,
    EchangesComponent,
    NavbarComponent,
    ProfilComponent,
    SidebarComponent,
    DashUserComponent,
    ArticlesComponent,
    
    
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    FormsModule,
  ]
})
export class DashboardUserModule { }
