import { Component, OnInit } from '@angular/core';

import { FounisseurService } from '../../Services/founisseur.service';


@Component({
  selector: 'app-fournisseur-pie-charts',
  templateUrl: './fournisseur-pie-charts.component.html',
  styleUrls: ['./fournisseur-pie-charts.component.css']
})
export class FournisseurPieChartsComponent implements OnInit {

  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor(private Founisseurservice :FounisseurService){ }

  ngOnInit(): void {
    this.Founisseurservice.getChiffreAffaireAllFournisseur().subscribe(res=>{
      this.Stat=res;
    
      console.log("ddd"+this.Stat.map(i=>i.Fournisseur));
  })
  
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
