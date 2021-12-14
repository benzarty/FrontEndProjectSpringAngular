import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FounisseurService } from '../../Services/founisseur.service';
import { Fournisseur } from '../../models/Fournisseur';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-get-fournisseur',
  templateUrl: './get-fournisseur.component.html',
  styleUrls: ['./get-fournisseur.component.css']
})
export class GetFournisseurComponent implements OnInit {
  fournisseur = new Fournisseur()
  Ville:string
  words:any
  nbProduit :number;
  linkfb:SafeResourceUrl;
  link:SafeResourceUrl;
  showmap=false;
  TextBtn="afficher la Localisation"
  constructor(private ac:ActivatedRoute,private founisseurService:FounisseurService,public sanitizer: DomSanitizer) { }
toggleMap(){
  this.showmap=!this.showmap
  if(this.showmap)
  this.TextBtn="Fermer la Localisation"
  else{
    this.TextBtn="Afficher la Localisation"
  }
}
  ngOnInit(): void {
    
    this.ac.paramMap.subscribe(next=>this.founisseurService.getFournisseur(Number(next.get('id'))).subscribe(res=>
      {this.fournisseur=res,
        this.words=res.libelleFournisseur.split(',')
        this.Ville=this.words[0]
      this.link=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDX-nRJ8JxhkpsCsD_-7qGO1vgGtRfMWG4&q="+this.Ville)
      this.linkfb=this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/home/listFournisseur/"+res.idFournisseur)
      }));
    
     
    
      console.log(this.Ville)
  }
  getnbProduit()
  {

    this.founisseurService.NbProduitParFournisseur(this.fournisseur.idFournisseur).subscribe(res=>{
      this.nbProduit=res.valueOf();
            })
  }

}
