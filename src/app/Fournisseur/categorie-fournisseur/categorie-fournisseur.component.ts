import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FounisseurService} from '../../Services/founisseur.service'
import { Fournisseur } from '../../models/Fournisseur';
@Component({
  selector: 'app-categorie-fournisseur',
  templateUrl: './categorie-fournisseur.component.html',
  styleUrls: ['./categorie-fournisseur.component.css']
})
export class CategorieFournisseurComponent implements OnInit {
list:Fournisseur[]
cat="Search:"
show=false;
  constructor(private ac:ActivatedRoute,private Founisseurserve:FounisseurService) { }

  ngOnInit(): void {
    }


    setElec(){
      this.show=true;
      this.Founisseurserve.getFournisseurByCategorie("Electromenager").subscribe(res=>{
        this.list=res;
    });
   
      this.ngOnInit();

    }
    setAli(){
      this.show=true;
      this.Founisseurserve.getFournisseurByCategorie("Alimentaire").subscribe(res=>{
        this.list=res;
    });
  
      this.ngOnInit();
   
    }
    setQuin(){
      this.show=true;
      this.Founisseurserve.getFournisseurByCategorie("Quincaillerie").subscribe(res=>{
        this.list=res;
    });
  
      this.ngOnInit();

    }
  }


