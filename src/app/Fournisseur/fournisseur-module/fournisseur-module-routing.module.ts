import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetFournisseurComponent } from '../get-fournisseur/get-fournisseur.component';
import { ListFournisseurComponent } from '../list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  { path: 'listFournisseur', component:ListFournisseurComponent,children:[ {
    path:":id",component:GetFournisseurComponent
  }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurModuleRoutingModule { }
