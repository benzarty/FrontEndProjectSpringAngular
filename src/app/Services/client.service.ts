import { Facture } from './../models/Facture';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private myhttp:HttpClient) { }




  
  SendMail (v:Facture): Observable<Facture> {

    return this.myhttp.post<Facture>("/api/SpringMVC/client/SendMail/",v,this.httpOptions) ;
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

}
