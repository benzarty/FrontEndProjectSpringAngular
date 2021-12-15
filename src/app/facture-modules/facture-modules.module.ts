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
    UpdateFactureComponent,
    HistoryFactureComponent


  ],
  imports: [
    CommonModule,
    FactureModulesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class FactureModulesModule { }
