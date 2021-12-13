

import { FactureModulesModule } from './facture-modules/facture-modules.module';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ListRayonComponent } from './Rayon/list-rayon/list-rayon.component';
import { AddRayonComponent } from './Rayon/add-rayon/add-rayon.component';
import { UpdateRayonComponent } from './Rayon/update-rayon/update-rayon.component';
import { ListStockComponent } from './Stock/list-stock/list-stock.component';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { UpdateStockComponent } from './Stock/update-stock/update-stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'rayon-management',
      children:[
                        {path: 'list-rayon', component: ListRayonComponent},
                        {path: 'add-rayon', component: AddRayonComponent},
                        {path: 'update-rayon/:id', component: UpdateRayonComponent}
                      ]
}, {  path: 'stock-management',
children: [
                  { path: 'list-stock', component: ListStockComponent },
                  { path: 'add-stock', component: AddStockComponent },
                  { path: 'update-stock/:id', component: UpdateStockComponent }
                ]
},








      {path:'facture', loadChildren: 
()=>import('./facture-modules/facture-modules.module').then(m=>m.FactureModulesModule)} ,
     // { path: 'facture', component: FactureComponent },
    //  { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
      { path: 'listProduit', component: ProduitListComponent },


      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
