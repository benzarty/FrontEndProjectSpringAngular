import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRayonRoutingModule } from './stock-rayon-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ListStockComponent} from "./management/stock-managment/list-stock/list-stock.component";
import {AddStockComponent} from "./management/stock-managment/add-stock/add-stock.component";
import {UpdateStockComponent} from "./management/stock-managment/update-stock/update-stock.component";
import {ListRayonComponent} from "./management/rayon-management/list-rayon/list-rayon.component";
import {UpdateRayonComponent} from "./management/rayon-management/update-rayon/update-rayon.component";
import {AddRayonComponent} from "./management/rayon-management/add-rayon/add-rayon.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ErrorsComponent} from "./errors/errors/errors.component";



@NgModule({
  declarations: [
    ListStockComponent,
    AddStockComponent,
    UpdateStockComponent,

    ListRayonComponent,
    AddRayonComponent,
    UpdateRayonComponent,

    PageNotFoundComponent,
    ErrorsComponent,

  ],
  imports: [
    CommonModule,
    StockRayonRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class StockRayonModule { }
