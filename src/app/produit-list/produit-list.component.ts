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

  listProducts: Produit[];
  formGeneral: FormGroup;


  constructor(private us:ProductService,private us2:DetailFactureService,private uss: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {

      }

  ngOnInit(): void {
    this.getAllProdcuts();




    this.formGeneral = new FormGroup({
      qte: new FormControl("", [Validators.required]),
      //idProduit: new FormControl("1", [Validators.required]),





    });

  }




  getAllProdcuts() {
    this.us.getAllProduits().subscribe(res => {
      this.listProducts = res;
    });
  }

  get idProduit() {
    return this.formGeneral.get('formGeneral.idProduit');
  }

  save() {





    this.us2.addDetailFacture(this.formGeneral.value,this.idProduit.value).subscribe(res => {


      console.log('Product created!');
      
      /* this.router.navigateByUrl('/home'); */
})



  }

  
}
