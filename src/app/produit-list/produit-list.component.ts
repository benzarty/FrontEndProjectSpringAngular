import { ToastrService } from 'ngx-toastr';
import { DetailFactureService } from './../Services/detail-facture.service';
import { DetailFacture } from './../models/DetailFacture';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../Services/product.service';
import { Produit } from './../models/Produit';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit,OnChanges {

  u :Produit=new Produit();
  myForm :FormGroup;
  listProducts: Produit[];
  toAdd: Produit;

   idclient : string ;

  constructor(private toaster:ToastrService,private us:ProductService,private us2:DetailFactureService,private uss: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {

      }

  ngOnInit(): void {
    this.getAllProdcuts();

    this.myForm=new FormGroup({
      qte:new FormControl(),
    
    }) ;





  }




  getAllProdcuts() {
    this.us.getAllProduits().subscribe(res => {
      this.listProducts = res;
    });
  }



  getall(v:any) {

    console.log(v);
  

    let myi=new DetailFacture();
    myi.qte=this.myForm.get('qte').value;

this.idclient="1";

   this.us2.addDetailFacture(myi,v,this.idclient).subscribe(res => {

    this.toaster.success('Produit Ajouter Au Panier','Notification')

})


}
}


  

  

