import { Router } from '@angular/router';
import { FactureService } from './../Services/facture.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Facture } from './../models/Facture';
import { Component, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit,OnChanges {

  @Input() FactureToEdit:Facture;
  @Output() edited = new EventEmitter<Facture>();


  constructor(private ps:FactureService, private router: Router,private toaster:ToastrService) { }
  myForm:FormGroup;
  ngOnInit(): void {
  }
  ngOnChanges(){
      //esm proprité w type SimpleChange wa7da 
  
    this.myForm=new FormGroup({
     // modepaiement:new FormControl({"value":this.FactureToEdit.modepaiement,"disabled":true}),
     modepaiement: new FormControl(this.FactureToEdit.modepaiement,Validators.required),
     idfacture: new FormControl(this.FactureToEdit.idFacture,Validators.required),


     
    

  })



}

  edit(){
    // console.log(this.myForm.value);  recupere que les champs active moch disbled
    console.log(this.myForm.getRawValue()); 
    let myi=new Facture();
    //esemi control name fil html
    let modet=this.myForm.get('modepaiement').value;
    let id=this.myForm.get('idfacture').value;

    this.ps.updateFacture(id,modet).subscribe();

  
    this.edited.emit(myi);
    this.toaster.success('Modification succées ','Notification')

  }
  

   
   
   


}
