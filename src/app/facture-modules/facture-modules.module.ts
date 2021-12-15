import { ListeProduitadminComponent } from './../Produit/liste-produitadmin/liste-produitadmin.component';
import { ProduitPipe } from './../Produit/rechercherproduit/produit.pipe';
import { ProduitListComponent } from './../produit-list/produit-list.component';
import { ProduitList1Component } from './../Produit/produit-list1/produit-list1.component';
import { DetailProduitComponent } from './../Produit/detail-produit/detail-produit.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-modal-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { HistoryFactureComponent } from './../history-facture/history-facture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateFactureComponent } from './../update-facture/update-facture.component';
import { FactureComponent } from './../facture/facture.component';
import { DetailFactureComponent } from './../detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureModulesRoutingModule } from './facture-modules-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    DetailFactureComponent,
    FactureComponent,
    ProduitListComponent,
    ProduitList1Component,
    ProduitPipe,
    DetailProduitComponent,
     ListeProduitadminComponent,
    UpdateFactureComponent,
    HistoryFactureComponent


  ],
  imports: [
    HttpClientModule,
    RouterModule,
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
  ]
})
export class FactureModulesModule { }
