import { Injectable } from '@angular/core';
import {Stock} from "../../models/stock/stock";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private getAllStockUrl:string='http://localhost:8075/SpringMVC/stock/retrieve-all-stocks'
  private getStockByIdUrl:string='http://localhost:8075/SpringMVC/stock/retrieve-stock/'
  private addStockUrl:string='http://localhost:8075/SpringMVC/stock/add-stock'
  private updateStockUrl:string='http://localhost:8075/SpringMVC/stock/modify-stock'
  private deleteStockUrl:string='http://localhost:8075/SpringMVC/stock/remove-stock/'

  private getCustomStockUrl:string='http://localhost:8075/SpringMVC/stock/retrieve-stock-between/'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.getAllStockUrl)
  }
  getStockById(id:number):Observable<Stock>{
    return this.http.get<Stock>(this.getStockByIdUrl+id,this.httpOptions)
  }

  addStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(this.addStockUrl,stock,this.httpOptions);
  }

  updateStock(stock: Stock): Observable<Stock>{
    return this.http.put<Stock>(this.updateStockUrl,stock,this.httpOptions);

  }

  deleteStockById(id: number): Observable<{}> {
    return this.http.delete<{}>(this.deleteStockUrl+id, this.httpOptions);

  }
  customSearchByDate(startDate: string, endDate: string): Observable<Stock[]>{
    console.log("here")
    console.log(this.getCustomStockUrl+startDate+'/'+endDate)
    return this.http.get<Stock[]>(this.getCustomStockUrl+startDate+'/'+endDate, this.httpOptions)
  }
}
