import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(
    private global : GlobalService
  ) { }
  intercept(request, next){
    let token = this.global.token ;
    let tokenizedRequest = request.clone({
      setHeaders : {
        Authorization : localStorage.getItem('token'),
        "Content-Type" : "application/json" 
      }
    })
      return next.handle(tokenizedRequest);
  }
}
