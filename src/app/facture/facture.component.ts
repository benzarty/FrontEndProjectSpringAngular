import { ClientService } from './../Services/client.service';
import { FormGroup } from '@angular/forms';
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
  myForm :FormGroup;

  factureToEditParent:Facture;

  listFactureByClient: Facture[];
 
  constructor(private us:FactureService,private Router: Router,private uss: ActivatedRoute,private toaster:ToastrService,private us2:ClientService) { }
  ngOnInit(): void {

   this.loadFactures();

   this.myForm=new FormGroup({
   
  
  }) ;
  }

  


  loadFactures() {
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

  editMyFacture(f:Facture){
    
  }

  getall(v:any) {

    
    console.log(v);
    
    
 this.us2.SendMail(v).subscribe(res => {

  this.toaster.success('Check Your Inobx','Notification')

  this.us.Closefacture(v).subscribe(res => {

   
    this.getFactureByClient()

        
     })
      
   })


}







  
}
