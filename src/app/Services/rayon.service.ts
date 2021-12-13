import { Rayon } from './../models/Rayon';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RayonService {

  private getAllRayonUrl: string = 'http://localhost:8075/SpringMVC/rayon/retrieve-all-rayon'
  private getRayonByIdUrl: string = 'http://localhost:8075/SpringMVC/rayon/retrieve-rayon/'
  private addRayonUrl: string = 'http://localhost:8075/SpringMVC/rayon/add-rayon'
  private updateRayonUrl: string = 'http://localhost:8075/SpringMVC/rayon/modify-rayon'
  private deleteRayonUrl: string = 'http://localhost:8075/SpringMVC/rayon/remove-rayon/'

  
  constructor(private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(this.getAllRayonUrl)
  }

  addRayon(rayon: Rayon): Observable<Rayon> {
    return this.http.post<Rayon>(this.addRayonUrl, rayon, this.httpOptions)
  }

  getRayonById(id: number): Observable<Rayon> {
    return this.http.get<Rayon>(this.getRayonByIdUrl + id, this.httpOptions)
  }

  updateRayon(rayon: Rayon): Observable<Rayon> {
    return this.http.put<Rayon>(this.updateRayonUrl, rayon, this.httpOptions);
  }

  deleteRayonById(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteRayonUrl + id);
  }
}
