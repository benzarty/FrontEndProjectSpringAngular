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


  listFactureByClient: Facture[];
 
  constructor(private us:FactureService,private Router: Router,private uss: ActivatedRoute) { }
  ngOnInit(): void {

    this.getFactureByClient();
  }





  
  getFactureByClient() {
    this.us.getFactureByClient().subscribe(res => {
      this.listFactureByClient = res;
    });
  }


  deleteFacture(p: Facture) {
    this.us.deleteFactureClient(p).subscribe(res => {
      this.getFactureByClient()
    });

  }
}
