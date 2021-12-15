import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../models/stock/stock";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../../services/stock/stock-service";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {

  stocks !: Stock[];

  totalLength !: number
  page: number = 1
  searchQuery: any;
  startDate: any;
  endDate: any;

  constructor(private stockService: StockService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    if (this.endDate==null && this.endDate==null){
      this.stockService.getStock().subscribe(
        res=>{
          this.stocks = res;
          this.totalLength = res.length
          //console.log(this.stocks.length);
        });
    }else {
      console.log("Custom search")
      this.stockService.customSearchByDate(this.startDate,this.endDate)
    }

  }

  goToUpdateStock(id: number) {
    this.router.navigate(['../update-stock', id] ,{ relativeTo: this.route});
  }

  goToDeleteStock(id: number) {
    this.stockService.deleteStockById(id).subscribe(

      res=> {
        console.log("Stock deleted")
       //console.log(res)
        //this will not reload component
        //this.route.navigate(['home/list-stock']);
        this.ngOnInit()
      }, error => {
        console.log("There was and error trying to  delete this stock")
        console.log(error);

        this.ngOnInit()
      }
      ,()=> { console.log("complete")}

    )

  }

  search() {
    if (this.searchQuery ==""){
      this.ngOnInit();
    }else {
      this.stocks= this.stocks.filter(res => {return res.libelleStock.toLocaleLowerCase().match(this.searchQuery.toLocaleLowerCase())})
    }
  }

  getCustomStock() {
this.stockService.customSearchByDate(this.startDate,this.endDate).subscribe(
  res=> {
    console.log("Custom Stocks Fetched")
    console.log(res)
    //this.route.navigate(['home/list-stock']);
    this.stocks = res
  }, error => {
    console.log("There was and error trying to get custom stock")
    console.log(error);
    this.ngOnInit();
  }
);
  }
}

