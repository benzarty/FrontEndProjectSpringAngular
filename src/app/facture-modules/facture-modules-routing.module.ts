import { HistoryFactureComponent } from './../history-facture/history-facture.component';
import { DetailFactureComponent } from './../detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from '../facture/facture.component';

const routes: Routes = [
  { path: 'facture', component: FactureComponent },
  { path: 'history', component: HistoryFactureComponent },

  { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureModulesRoutingModule { }

