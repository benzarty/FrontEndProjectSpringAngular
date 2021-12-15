import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { HistoryFactureComponent } from './history-facture/history-facture.component';
import { ListRayonComponent } from './Rayon/list-rayon/list-rayon.component';
import { AddRayonComponent } from './Rayon/add-rayon/add-rayon.component';
import { UpdateRayonComponent } from './Rayon/update-rayon/update-rayon.component';
import { ListStockComponent } from './Stock/list-stock/list-stock.component';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { UpdateStockComponent } from './Stock/update-stock/update-stock.component';
import { ErrorsComponent } from './errors/errors/errors.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { ModalModule } from 'ngx-modal-bootstrap';
import { ProduitList1Component } from './Produit/produit-list1/produit-list1.component';
import { ListeProduitadminComponent } from './Produit/liste-produitadmin/liste-produitadmin.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';
import { ProduitPipe } from './Produit/rechercherproduit/produit.pipe';
import { LoginComponent } from './Auth-Managment/login/login.component';
import { SignupComponent } from './Auth-Managment/signup/signup.component';
import { ClientAddComponent } from './Client-Managment/client-add/client-add.component';
import { ClientRetrieveComponent } from './Client-Managment/client-retrieve/client-retrieve.component';
import { ClientUpdateComponent } from './Client-Managment/client-update/client-update.component';
import { ClientProfileComponent } from './Client-Managment/client-profile/client-profile.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpInterceptorService } from './Services/http-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,

    ProduitListComponent,
    ListRayonComponent,
    AddRayonComponent,
    UpdateRayonComponent,
    ListStockComponent,
    AddStockComponent,
    UpdateStockComponent,
    ErrorsComponent,
    ProduitList1Component,
    ListeProduitadminComponent,
    DetailProduitComponent,
    ProduitPipe,
    LoginComponent,
    SignupComponent,
    ClientAddComponent,
    ClientRetrieveComponent,
    ClientUpdateComponent,
    ClientProfileComponent,
    NotFoundComponent,





  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),SimpleNotificationsModule.forRoot()
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService ,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
