import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurModuleRoutingModule } from './fournisseur-module-routing.module';
import { FormFournisseurComponent } from '../form-fournisseur/form-fournisseur.component';
import { ListFournisseurComponent } from '../list-fournisseur/list-fournisseur.component';
import { CategorieFournisseurComponent } from '../categorie-fournisseur/categorie-fournisseur.component';
import { GetFournisseurComponent } from '../get-fournisseur/get-fournisseur.component';
import { FournisseurChartComponent } from '../fournisseur-chart/fournisseur-chart.component';
import { EditFournisseurComponent } from '../edit-fournisseur/edit-fournisseur.component';
import { FournisseurPieChartsComponent } from '../fournisseur-pie-charts/fournisseur-pie-charts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService, ChartModule, DataLabelService, LegendService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    FormFournisseurComponent,
    ListFournisseurComponent,
    GetFournisseurComponent,
    CategorieFournisseurComponent,
    FournisseurChartComponent,
    FournisseurPieChartsComponent,
    EditFournisseurComponent,
    
  ],
  imports: [
    CommonModule,
    FournisseurModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
    ChartModule,
    NgxChartsModule,

   
  ],
  providers: [ CategoryService, LegendService, DataLabelService, LineSeriesService],

})
export class FournisseurModuleModule { }
