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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
