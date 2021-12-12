import { FactureService } from './../../Services/facture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  Chiffre: number;
  Chiffre2: number;
  Chiffre3: number;


  constructor(private us:FactureService) { }

  ngOnInit(): void {
    this.getNbFactureLastMonth();
    this.getChiffreaffaireLastMonth();
    this.getChiffreaffairetoday();
  }


  getNbFactureLastMonth() {
    this.us.getNbFactureLastMonth().subscribe(res => {

      this.Chiffre = res;


    });
  }

  getChiffreaffaireLastMonth() {
    this.us.getChiffreaffaireLastMonth().subscribe(res => {

      this.Chiffre2 = res;


    });
  }

  
  getChiffreaffairetoday() {
    this.us.getChiffreaffairetoday().subscribe(res => {

      this.Chiffre3 = res;


    });
  }
  
  


}
