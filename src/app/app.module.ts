// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header-footer/header/header.component';
import { FooterComponent } from './composants/header-footer/footer/footer.component';
import { AccueilComponent } from './composants/page-user/accueil/accueil.component';
import { AProposComponent } from './composants/page-user/a-propos/a-propos.component';
import { CommentCaMarcheComponent } from './composants/page-user/comment-ca-marche/comment-ca-marche.component';
import { ContactComponent } from './composants/page-user/contact/contact.component';
import { ConfidentialiteComponent } from './composants/page-user/confidentialite/confidentialite.component';
import { ConditionUtilisationComponent } from './composants/page-user/condition-utilisation/condition-utilisation.component';
import { ArticlesComponent } from './composants/page-user/articles/articles.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebareComponent } from './dashbord-admin/sidebare/sidebare.component';
import { SidebarComponent } from './dashboard-users/sidebar/sidebar.component';
import { AcceuilUserComponent } from './dashboard-users/acceuil-user/acceuil-user.component';
import { AnnoncesComponent } from './dashboard-users/annonces/annonces.component';
import { DonsComponent } from './dashboard-users/dons/dons.component';
import { EchangesComponent } from './dashboard-users/echanges/echanges.component';
import { ProfilComponent } from './dashboard-users/profil/profil.component';
// import { MainUserComponent } from './dashboard-users/main-user/main-user.component';
import { TokenInterceptorProvider } from './interceptors/interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AProposComponent,
    CommentCaMarcheComponent,
    ContactComponent,
    ConfidentialiteComponent,
    ConditionUtilisationComponent,
    ArticlesComponent,
    AuthComponent,
    LoginComponent,
    NavbarComponent,
    SidebareComponent,
    SidebarComponent,
    AcceuilUserComponent,
    AnnoncesComponent,
    DonsComponent,
    EchangesComponent,
    ProfilComponent,
    // MainUserComponent,
  
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  // providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
