import { DetailFactureService } from './../Services/detail-facture.service';
import { DetailFacture } from './../models/DetailFacture';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {

  list: DetailFacture[];
  @ViewChild('content111', {static:false}) el!:ElementRef;

  DetailFactureToEditParent: DetailFacture;
  show=false;

  public id: string;
  constructor(private us:DetailFactureService,private router: Router,private uss: ActivatedRoute) { }

  ngOnInit(): void {


   
      
      this.uss.paramMap.subscribe(
        res=>{
         let u=res.get('idfacture');
         console.log(u);

          this.us.getDetailFacture(u).subscribe(res=>{
           this.list=res;
           console.log(this.list);
          return  this.list
           
          })
      }
    )
    ;


  }


  editInvoice(x:DetailFacture){
    this.show=true;
    this.DetailFactureToEditParent=x;
    
  }
makePDF()
{
  let pdf=new  jsPDF('p','pt','a1');
  pdf.html(this.el.nativeElement,{callback:(pdf)=>{pdf.save("demo.pdf")}})
  
}




}
