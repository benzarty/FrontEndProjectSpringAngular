import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionDetails } from '../models/ConnectionDetails';
import { LoginDetails } from '../models/LoginDetails';
import { GlobalService } from './global.service';
import { Signup } from './../models/Signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private addPersonneUrl:string='/api/SpringMVC/auth/signup'

  constructor(
    public http : HttpClient,
    private globalVariables : GlobalService
  
    ) { }

    
    
  authenticate(cd : ConnectionDetails) : Observable<LoginDetails>{

    return this.http.post<LoginDetails>('/api/SpringMVC/auth/signIn',cd);
  }


  logout() {
    //sessionStorage.removeItem('authenticatedUser')
    sessionStorage.clear();
    localStorage.clear();
    this.globalVariables.role = null
    this.globalVariables.username = null
    this.globalVariables.token = ''
     console.log(this.isUserLoggedIn())
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    return !(user === '')
  }
  

  sinscrire(signup: Signup):Observable<String>{
      return this.http.post<String>(this.addPersonneUrl,signup);
    
  }

}
