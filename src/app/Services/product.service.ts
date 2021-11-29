import { Produit } from './../models/Produit';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myhttp:HttpClient) { }



  
  getAllProduits() : Observable<Produit[]>{
    return this.myhttp.get<Produit[]>("/api/SpringMVC/Produit/retrieve-all-produit");
  }
}
