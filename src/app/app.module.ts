import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureComponent } from './facture/facture.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,
    DetailFactureComponent,
    FactureComponent,
    ProduitListComponent,
    UpdateFactureComponent,
    
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
