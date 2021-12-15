import { ClientProfileComponent } from './Client-Managment/client-profile/client-profile.component';
import { ClientUpdateComponent } from './Client-Managment/client-update/client-update.component';
import { ClientAddComponent } from './Client-Managment/client-add/client-add.component';
import { ClientRetrieveComponent } from './Client-Managment/client-retrieve/client-retrieve.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './Auth-Managment/signup/signup.component';
import { LoginComponent } from './Auth-Managment/login/login.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';
import { ProduitList1Component } from './Produit/produit-list1/produit-list1.component';


import { FactureModulesModule } from './facture-modules/facture-modules.module';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';

import { ListeProduitadminComponent } from './Produit/liste-produitadmin/liste-produitadmin.component';
import { RouteGuardService } from './Services/route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
    
      {path:'clientretrieve',component: ClientRetrieveComponent},
      {path: 'add-client',component: ClientAddComponent},
      {path: 'modify-client/:id', component: ClientUpdateComponent },
      {path: 'client-profile', component: ClientProfileComponent},
      {path:'', loadChildren: 
      ()=>import('./Fournisseur/fournisseur-module/fournisseur-module.module').then(m=>m.FournisseurModuleModule)} ,
   
      
      {
        path: 'stock-rayon', loadChildren:
        ()=>import('./stock-rayon/stock-rayon.module').then(m=>m.StockRayonModule)} ,


  
      {
        path: 'produit-management',
        children: [
          { path: 'listProduit1', component: ProduitList1Component },
          { path: 'listProduitAdmin', component: ListeProduitadminComponent },
          { path: 'produitdetail/:idProduit', component: DetailProduitComponent }
        ]
      },








      {
        path: 'facture', loadChildren:
          () => import('./facture-modules/facture-modules.module').then(m => m.FactureModulesModule)
      },
      // { path: 'facture', component: FactureComponent },
      //  { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
      { path: 'listProduit', component: ProduitListComponent },



    ], canActivate:[RouteGuardService]
  },
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
