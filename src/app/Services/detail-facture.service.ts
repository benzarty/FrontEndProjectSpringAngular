import { DetailFacture } from './../models/DetailFacture';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {


  constructor(private myhttp:HttpClient) { }

  getDetailFacture(detailproduit: string) : Observable<DetailFacture[]>{
    return this.myhttp.get<DetailFacture[]>("/api/SpringMVC/DetailFacture/retrieveDetailFactureBYidfacture/" +detailproduit);
  }


  addDetailFacture (detailfacture: DetailFacture,idProduit:number,idclient:string): Observable<DetailFacture> {
    return this.myhttp.post<DetailFacture>("/api/SpringMVC/DetailFacture/add-DetailFacture2/"+idProduit+"/"+idclient, detailfacture, this.httpOptions);}

    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }

  
}
