import { Observable } from 'rxjs';
import { Facture } from './../models/Facture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private myhttp:HttpClient) { }



  getFactureByClient() : Observable<Facture[]>{
    return this.myhttp.get<Facture[]>("/api/SpringMVC/facture/getFacturesByClient/1");
  }

  deleteFactureClient (facture: Facture): Observable<Facture> {
    const url='/api/SpringMVC/facture/removeFacture/'+ facture.idFacture;
    return this.myhttp.delete<Facture>(url);
    }

}
