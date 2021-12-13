import { DetailProduit } from './../models/DetailProduit';
import { FormGroup } from '@angular/forms';
import { Produit } from './../models/Produit';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl : string = "http://localhost:8075/SpringMVC/Produit";
  
  public formproduit:  FormGroup; 
  listData : Produit[];

  constructor(private myhttp:HttpClient) { }



  
  getAllProduits() : Observable<Produit[]>{
    return this.myhttp.get<Produit[]>("/api/SpringMVC/Produit/retrieve-all-produits");
  }

  createData(formData: FormData): Observable<any> {
    return this.myhttp.post(`${this.productsUrl+"/file"}`, formData);
  }
  getbyid(idProduit :number) {
    return this.myhttp.get<DetailProduit>( this.productsUrl+'/retrieve-produit/' + idProduit);
  }
  trier(field :String) {
    return this.myhttp.get<Produit>( this.productsUrl+'/trier/' + field);
  }
  deleteProduct (product: number ): Observable<Produit> {
    const url=this.productsUrl+"/remove-produit/"+ product;
    return this.myhttp.delete<Produit>(url);
  }
  addProduct (product: Produit ,idStock: number ,idRayon :number): Observable<Produit> {
    return this.myhttp.post<Produit>(this.productsUrl+"/create-produit/"+idRayon+"/"+idStock,product, this.httpOptions);
  }
  updateProduct ( product: Produit): Observable<Produit> {
    return this.myhttp.put<Produit>(this.productsUrl+'/modify-produit/', product, this.httpOptions);
    }
  uploadfileproduit ( product: Produit): Observable<Produit> {
   
      return this.myhttp.post<Produit>(this.productsUrl+"/save-produit1/", product, this.httpOptions);
      }
  
  httpOptions = {
     headers: new HttpHeaders({
     'Content-Type': 'application/json' 
    
     })
    // headers1: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    }
     HttpUploadOptions = {
      headers: new HttpHeaders({
         "Content-Type": "multipart/form-data"
      })
   }
    
    uploadFile(file: File): Observable<HttpEvent<{}>> {
      var headers = new HttpHeaders(
        {
          'Content-Type': 'multipart/form-data',
          
        }
      );
      const formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
          reportProgress: true,
          responseType: 'text'
      });
    
      return this.myhttp.request(req);
     }
}

