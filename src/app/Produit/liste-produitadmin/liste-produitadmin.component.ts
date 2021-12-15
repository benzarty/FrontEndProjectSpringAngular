import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-modal-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Produit } from 'src/app/models/Produit';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-produitadmin',
  templateUrl: './liste-produitadmin.component.html',
  styleUrls: ['./liste-produitadmin.component.css']
})
export class ListeProduitadminComponent implements OnInit {

  id;
  produit = new Produit();
  listeproduit:Produit[];
  searchText;
  p = 1;
  formproduit: FormGroup;
  modalRef: BsModalRef;
  submitted = false;
  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor( private produitservice:ProductService ,  private router : Router,
    private formbuider: FormBuilder, private modalService: BsModalService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.formproduit = this.formbuider.group({

      libelle: ['', [Validators.required]],
      code: ['', [Validators.required]],
      prixUnitaire: ['', [Validators.required]],
      
     // categorieProduit: ['', [Validators.required]],
      
    });
  }
  // onSubmit() {
   
  //     this.addData();
  //   }
  getAllProducts() {
    this.produitservice.getAllProduits().subscribe(res => {
      this.listeproduit = res;
    });
  }
  addprod(idStock: any,idRayon:any) {

    console.log(idStock);
    console.log(idRayon);
    //this.submitted = true;
    let myi=new Produit();
    myi.libelle=this.formproduit.get('libelle').value;
    myi.code=this.formproduit.get('code').value;
    myi.prixUnitaire=this.formproduit.get('prixUnitaire').value;
     //myi.categorieProduit=this.formproduit.get('categorieProduit').value;
     myi.detailproduit= {
       "idDetailProduit":9,
      "categorieProduit": "Alimentaire",
       "dateCreation" : "2021-11-01",
      "dateDerniereModification": "2021-11-09"
    };




    // stop here if form is invalid
    if (this.formproduit.invalid) {
      return;
    }
    
    console.log(this.formproduit.value);
    this.produitservice.addProduct(myi,idRayon,idStock).subscribe((res: any) => {
      console.log(res);
     this.getAllProducts();
     this.toaster.success('Produit Creer avec succes ','Notification')

    });
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  get te() {
    return this.formproduit.controls;
  }
  deleteProduct(p: number) {
    Swal.fire({
      title: 'Etes vous sur?',
      text:   this.produit.libelle + this.produit.code,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK ,Effacer le!'
    }).then((result) => {
      if (result.value) {
    this.produitservice.deleteProduct(p).subscribe(res => {
      this.getAllProducts()
    });
    Swal.fire(
      'Supprimer!',
      'Votre Produit à était supprimer.',
      'success'
    );
  }
});

  }
  trier(field: String){
    this.produitservice.trier(field).subscribe(res => {
      this.getAllProducts()
    });
  }
  recupere( idProduit,libelle,code,prixUnitaire,detailproduit){
    this.produit.idProduit=idProduit;
    
    
    this.produit.libelle=libelle;
  this.produit.code=code;
  this.produit.prixUnitaire=prixUnitaire;
  this.produit.detailproduit=detailproduit;
  


}
modifd() {
  this.submitted = true;
  if (this.formproduit.invalid) {
    return;
  }
  this.produitservice.updateProduct(this.formproduit.value).subscribe(result => {
    console.log(result);
  });
  
  this.getAllProducts();
  this.modalRef.hide();
}
update(){

  const produit={
    libelle:this.produit.libelle,
    code :this.produit.code,
    prixUnitaire:this.produit.prixUnitaire,
    idProduit:this.produit.idProduit,
    //detailproduit:this.produit.detailproduit
    
    

  }
this.produitservice.updateProduct(produit).subscribe(res=>{

console.log(this.produit.idProduit)
this.getAllProducts();

});
 // this.modalRef.hide();

}
addData() {
  const formData = new  FormData();
  const produit = this.produitservice.formproduit?.value;
  formData.append('produit',JSON.stringify(produit));
  formData.append('file',this.userFile);
  this.produitservice.uploadfileproduit(produit).subscribe( data => {
  
    this.router.navigate(['/listProduitAdmin']); 
  });
}

onSelectFile(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
   
    
  }

}
