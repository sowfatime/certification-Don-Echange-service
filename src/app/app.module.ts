import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

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
// import { TokenInterceptorProvider } from './interceptors/interceptor';



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
  
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
