import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Fournisseur } from 'src/app/models/Fournisseur';
import {FounisseurService} from '../../Services/founisseur.service'
@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {
  @Input() Fournisseur:Fournisseur = new Fournisseur();

  @Output() edited = new EventEmitter<Fournisseur>();

  myForm:FormGroup;
 

  constructor(private ps:FounisseurService, private router: Router) { }


  ngOnInit(): void {
 
    this.myForm=new FormGroup({
    
      idFournisseur : new FormControl (this.Fournisseur.idFournisseur,Validators.required),
      codeFournisseur : new FormControl (this.Fournisseur.codeFournisseur,Validators.required),
      libelleFournisseur : new FormControl (this.Fournisseur.libelleFournisseur,Validators.required),

    }) 
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){

    this.Fournisseur.idFournisseur = this.myForm.get('idFournisseur').value;
    let id = this.myForm.get('idFournisseur').value;
    this.Fournisseur.codeFournisseur = this.myForm.get('codeFournisseur').value;
    this.Fournisseur.libelleFournisseur = this.myForm.get('libelleFournisseur').value;
    console.log(this.Fournisseur+id);
  this.ps.updateFournisseur(id,this.Fournisseur).subscribe()

  this.reloadComponent();
}


  get myidFournisseur(){
    return this.myForm.get('idFournisseur');
  }
  get mycodeFournisseur ( ){
    return this.myForm.get('codeFournisseur');
  }
  get mylibelleFournisseur (){
    return this.myForm.get('libelleFournisseur');
  }
}
