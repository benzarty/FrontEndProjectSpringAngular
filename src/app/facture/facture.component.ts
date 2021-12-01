import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Facture } from './../models/Facture';
import { Component, OnInit } from '@angular/core';
import { FactureService } from '../Services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  show=false;
  factures:Facture[];

  factureToEditParent:Facture;

  listFactureByClient: Facture[];
 
  constructor(private us:FactureService,private Router: Router,private uss: ActivatedRoute,private toaster:ToastrService) { }
  ngOnInit(): void {

    this.getFactureByClient();
  }


  editFacture(x:Facture){
    this.show=true;
    this.factureToEditParent=x;
    
  }


  
  getFactureByClient() {
    this.us.getFactureByClient().subscribe(res => {
      this.listFactureByClient = res;
    });
  }


  deleteFacture(p: Facture) {
    this.us.deleteFactureClient(p).subscribe(res => {
      this.getFactureByClient()
      this.toaster.success('Suppression succées ','Notification')

    });

  }

  editMyFacture(i:any){
    for (let k in this.factures){
      if (this.factures[k].idFacture == i.idFacture){
        this.factures[k]=i;
      }
    }


    
  }
}
