import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'

})
export class FounisseurService {
  list : [];
  FournisseurService: Fournisseur[];
  FournisseursUrl:"http://localhost:8084/SpringMVC/Fournisseur/";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
    }
    constructor(private myHttp : HttpClient) { 
    }
    getAllFournisseurFromServer(): Observable<Fournisseur[]> {
     
      return this.myHttp.get<Fournisseur[]>('/api/SpringMVC/Fournisseur/retrieve-all-Fournisseurs');
    }
    getFournisseur(id:number): Observable<Fournisseur> {
     
      return this.myHttp.get<Fournisseur>('/api/SpringMVC/Fournisseur/retrieve-Fournisseur/'+id);
    }
    
    deleteFournisseur (fournisseur: Fournisseur): Observable<Fournisseur> {
      const url='/api/SpringMVC/Fournisseur/remove-fournisseur/'+fournisseur.idFournisseur;
      return this.myHttp.delete<Fournisseur>(url);
      }
     
      addFournisseur (fournisseur: Fournisseur): Observable<Fournisseur> {
        return this.myHttp.post<Fournisseur>('/api/SpringMVC/Fournisseur/add-fournisseur', fournisseur, this.httpOptions);}

        updateFournisseur(id: number, fournisseur: Fournisseur): Observable<Fournisseur> {
          return this.myHttp.put<Fournisseur>('/api/SpringMVC/Fournisseur/modify-Fournisseur/', fournisseur, this.httpOptions);
          }

          NbProduitParFournisseur(id:number) : Observable<number>{
     
            return this.myHttp.get<number>('/api/SpringMVC/Fournisseur/nb-produit/'+id);
          }
          getFournisseurByCategorie(Categorie:string): Observable<Fournisseur[]> {
     
            return this.myHttp.get<Fournisseur[]>('/api/SpringMVC/Fournisseur/GetIdByCategorie/'+Categorie);
          }

          getChiffreAffaireAllFournisseur(): Observable<Object[]> {
            return this.myHttp.get<Object[]>('/api/SpringMVC/Fournisseur/getChiffreDaffaureChaqueFournisseur');
          }

          getChiffreAffaireParDate(id:number): Observable<Object[]> {
            return this.myHttp.get<Object[]>('/api/SpringMVC/Fournisseur/ChiAffaireDateFournisseur/'+id);
          }
}
