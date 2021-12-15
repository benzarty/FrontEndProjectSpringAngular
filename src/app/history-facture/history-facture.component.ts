import { Facture } from './../models/Facture';
import { Route } from '@angular/compiler/src/core';
import { FactureService } from './../Services/facture.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-history-facture',
  templateUrl: './history-facture.component.html',
  styleUrls: ['./history-facture.component.css']
})
export class HistoryFactureComponent implements OnInit {

  listFactureByClient : Facture[];


  totalLengh :any;
  page:number=1;

  constructor(private us:FactureService,private Router: Router,private uss: ActivatedRoute) { }

  ngOnInit(): void {

    this.getFacturesHistorique();
  }



  getFacturesHistorique() {
    this.us.getFacturesHistorique().subscribe(res => {
      this.listFactureByClient = res;

      this.totalLengh=res.length;
    });
  }

}
