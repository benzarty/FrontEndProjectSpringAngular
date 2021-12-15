import { ToastrService } from 'ngx-toastr';
import { DetailFacture } from './../../models/DetailFacture';
import { ActivatedRoute } from '@angular/router';
import { DetailFactureService } from './../../Services/detail-facture.service';
import { ProductService } from './../../Services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produit } from './../../models/Produit';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-produit-list1',
  templateUrl: './produit-list1.component.html',
  styleUrls: ['./produit-list1.component.css']
})
export class ProduitList1Component implements OnInit,OnChanges {

  idclient : string ;

  myForm :FormGroup;
  listProducts: Produit[];
  formGeneral: FormGroup;
  toAdd: Produit;

  
  id:number;
  idProduit:number;
  prod:any;
  hidden:boolean=false;
  nb : number;
  constructor(private us:ProductService,private us2:DetailFactureService,private uss: ActivatedRoute,private toaster:ToastrService) { }
  ngOnChanges(changes: SimpleChanges): void {

      }

  ngOnInit(): void {
    this.getAllProdcuts();
    this.toAdd=new Produit();
    this.myForm=new FormGroup({
      qte:new FormControl(),
    
    }) ;



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

  getbyidproduit(i:number){
    this.hidden=true;
    this.nb=i;
  }

/*   save() {

    let qte=this.formGeneral.get('qte').value;
    let idProduit=this.formGeneral.get('idProduit').value;

    let myi=new DetailFacture();
    myi.qte=this.formGeneral.get('qte').value;


    this.us2.addDetailFacture(myi,idProduit).subscribe(res => {


      console.log('Product created!');
      
})
 


  }*/

  getall(v:any) {

    console.log(v);
  

    let myi=new DetailFacture();
    myi.qte=this.myForm.get('qte').value;

this.idclient="2";

   this.us2.addDetailFacture(myi,v,this.idclient).subscribe(res => {

    this.toaster.success('Produit Ajouter Au Panier','Notification')



})
  }

  
}
