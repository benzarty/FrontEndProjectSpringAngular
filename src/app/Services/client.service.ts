import { Client } from './../models/Client';
import { GlobalService } from './global.service';
import { Facture } from './../models/Facture';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private addClientUrl:string='/api/SpringMVC/client/add-client'
  private deleteClientUrl:string='/api/SpringMVC/client/remove-client/'
  private updateClientUrl:string='/api/SpringMVC/client/modify-client'
  private getClientByIdUrl:string='/api/SpringMVC/client/retrieve-client/' 

  constructor(private myhttp:HttpClient, private globalVariables : GlobalService) { }




  
  SendMail (v:Facture): Observable<Facture> {

    return this.myhttp.post<Facture>("/api/SpringMVC/client/SendMail/",v,this.httpOptions) ;
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    getAllClients() : Observable<Client[]>{
      return this.myhttp.get<Client[]>("/api/SpringMVC/client/retrieve-all-clients",this.httpOptions);
    }

  addClient(client: Client):Observable<Client>{
    return this.myhttp.post<Client>(this.addClientUrl,client,this.httpOptions);
  }

  deleteClientById(id: number): Observable<any> {
    return this.myhttp.delete<any>(this.deleteClientUrl+id);

  }

  updateClient(client: Client): Observable<Client>{
    return this.myhttp.put<Client>(this.updateClientUrl,client,this.httpOptions);

  }
  getClientById(id:number):Observable<Client>{
    return this.myhttp.get<Client>(this.getClientByIdUrl+id,this.httpOptions)
  }


}
