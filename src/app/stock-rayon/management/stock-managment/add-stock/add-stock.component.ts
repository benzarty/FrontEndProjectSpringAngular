import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StockService} from "../../../services/stock/stock-service";
import {ActivatedRoute, Router} from "@angular/router";
import {Stock} from "../../../models/stock/stock";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  addStockForm !:  FormGroup;

  constructor(private stockService: StockService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.addStockForm = new FormGroup(
      {
        qteStock: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*$"),  Validators.maxLength(4)]),
        qteMin: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*$"),  Validators.maxLength(4)]),
        libelleStock: new FormControl('',[Validators.required,  Validators.minLength(3),Validators.maxLength(30)]),
      }
    );
  }

  addStock() {
  //console.log(this.addStockForm.value);
  //console.log(this.addStockForm.get('qteMin')?.value);
  let stockToAdd = new Stock(this.addStockForm.get('qteStock')?.value,this.addStockForm.get('qteMin')?.value,this.addStockForm.get('libelleStock')?.value);
  console.log(stockToAdd)

  this.stockService.addStock(stockToAdd).subscribe(
    res=>{
      console.log(res)
      this.router.navigate(['../list-stock'],{ relativeTo: this.activatedRoute});
    }
  )


  }
}
