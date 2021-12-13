import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  @Input() idProduit:number;
   prod:any;
   starRating = 0; 
  // starRating = 0; 

  constructor(private us:ProductService) { }

  ngOnInit(): void {
    this.us.getbyid(this.idProduit).subscribe(res => {
      console.log(res);
      this.prod = res;

    });
  }

  getbyidproduit(idProduit:number){
    this.us.getbyid(this.idProduit).subscribe(res => {
      console.log(res);
      this.prod = res;

    });
  }
  getUrl(){     
    let a=window.location.pathname.toString();     let b=-1;    
      for(let i=a.length-1;i>-1;i--){       if(a[i]=='/') {b=i   
              break; 
      }     }   
        return  (a.slice(b+1,a.length));   }
}


