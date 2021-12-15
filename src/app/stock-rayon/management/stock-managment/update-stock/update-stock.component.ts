import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Stock} from "../../../models/stock/stock";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {StockService} from "../../../services/stock/stock-service";

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  stockToUpdate !:Stock;
  updateStockForm = new FormGroup(
    {
      qte: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*$"),  Validators.maxLength(4)]),
      qteMin: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*$"),  Validators.maxLength(4)]),
      libelleStock: new FormControl('',[Validators.required,  Validators.minLength(3),Validators.maxLength(30)]),
    });

  constructor(private activatedRoute: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {

    // When you get the "field" id from url as a parameter it will be in string format, you have to format it to "int" by parsing it.
    //  this.id = this.route.snapshot.paramMap.get('id');
    let id = this.activatedRoute.paramMap.subscribe(
      params=> {
        var id = parseInt(<string>params.get('id'));
        console.log(id);

        this.stockService.getStockById(id).subscribe(
          data=> {
            console.log("Stock fetched successfully");
            this.stockToUpdate = data; // This line allows us to update the view in a smooth way
            this.updateStockForm.controls['qte'].setValue(this.stockToUpdate.qte);
            this.updateStockForm.controls['qteMin'].setValue(this.stockToUpdate.qteMin);
            this.updateStockForm.controls['libelleStock'].setValue(this.stockToUpdate.libelleStock);

            //Do not use this since this line will override the the validation rules which will force you to use setValidators again.
            //this.updateStockForm.setControl('libelleStock', new FormControl(this.stockToUpdate.libelleStock));

          },
          error => console.log("Exception on fetching stock by id ")
        )


      }
        )



  }

  updateStock(stock: Stock) {

    this.stockToUpdate.qte = parseInt(this.updateStockForm.get('qte')?.value);
    this.stockToUpdate.qteMin = parseInt(this.updateStockForm.get('qteMin')?.value);
    this.stockToUpdate.libelleStock= this.updateStockForm.get('libelleStock')?.value;
    console.log(this.stockToUpdate);

    // You are not sending the stocck to update but rather the old stuck??????? how does it work - make sure to add id in update

  this.stockService.updateStock(stock).subscribe(
    res=>{
      console.log("Stock updated")
      console.log(res)
      this.router.navigate(['../../list-stock'],{ relativeTo: this.activatedRoute});
    }
  )


  }

}
