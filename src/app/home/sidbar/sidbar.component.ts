import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  constructor(
    private logoutService : AuthenticationServiceService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.logoutService.logout;
    }
}
