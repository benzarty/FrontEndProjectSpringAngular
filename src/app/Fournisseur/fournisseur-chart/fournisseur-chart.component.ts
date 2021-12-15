
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FounisseurService } from '../../Services/founisseur.service';
@Component({
selector: 'app-fournisseur-chart',
templateUrl: './fournisseur-chart.component.html',
styleUrls: ['./fournisseur-chart.component.css']
})
export class FournisseurChartComponent implements OnInit {
  public primaryXAxis: Object;

public primaryYAxis: Object;
public legendSettings: Object;
public marker: Object;
public title: string;
public Mydata: Object;

ngOnInit(): void {
  this.ac.paramMap.subscribe(next=>this.fournisseurserv.getChiffreAffaireParDate(Number(next.get('id'))).subscribe(res=>
    {this.Mydata=res}));

    this.marker = {
        dataLabel:{
            visible: true
        }
    };
 
    this.primaryXAxis = {
        valueType: 'Category'
    };
    this.primaryYAxis = {
        labelFormat: '${value}K'
    };
    this.legendSettings = {
        visible: true
    };
    this.title = 'Sales Analysis';
}

constructor(private fournisseurserv:FounisseurService ,private ac:ActivatedRoute,){}
}