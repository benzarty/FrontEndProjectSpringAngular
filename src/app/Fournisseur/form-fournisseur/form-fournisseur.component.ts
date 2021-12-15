import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fournisseur } from '../../models/Fournisseur';
import { FounisseurService } from '../../Services/founisseur.service';

@Component({
  selector: 'app-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.css']
})
export class FormFournisseurComponent implements OnInit {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Fournisseur>();
  fournisseur:Fournisseur;
  constructor(private founisseurService :FounisseurService) {}

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idFournisseur:new FormControl(),
      codeFournisseur: new FormControl(),
      libelleFournisseur: new FormControl(),
    }) 
  }
add(){
  this.founisseurService.addFournisseur(this.myForm.value).subscribe();
this.aded.emit(this.myForm.value);
this.myForm.reset();
}


}