import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionDetails } from 'src/app/models/ConnectionDetails';
import { LoginDetails } from 'src/app/models/LoginDetails';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:  FormGroup;
connectionDetails : ConnectionDetails = new ConnectionDetails();
  constructor(
    private router :Router,
    private authenticationService : AuthenticationServiceService ,
    private globalVriables : GlobalService,
    //private userService : UsersService

    ) { }
    loginDetails : LoginDetails
    username = ''
    password = ''
    id= ''
    errorMessage = "Nom d'utilisateur ou mot de passe incorrecte"
        invalidLogin = false
    responseStatus : any ;
  
  ngOnInit(): void {
    localStorage.setItem('token', '');
    this.loginForm = new FormGroup(
      {
        username: new FormControl(this.connectionDetails.username,[Validators.required]),
        password: new FormControl(this.connectionDetails.password,[Validators.required]),
      }
    );
  }
  handleLogin(){    
    console.log("loggin in ..")
    console.log(this.connectionDetails);
    this.authenticationService.authenticate(this.connectionDetails).subscribe(
      response => {
        console.log(response)
        this.loginDetails = response
        this.globalVriables.role = this.loginDetails.roles[0]
        this.globalVriables.token = "Bearer "+this.loginDetails.accessToken
        this.globalVriables.username=this.loginDetails.username
        this.globalVriables.id=this.loginDetails.id
      
        localStorage.setItem('token', this.globalVriables.token);
        localStorage.setItem('username',this.globalVriables.username);
        localStorage.setItem('id',this.globalVriables.id);
        //sessionStorage.setItem('username',this.username);
        this.invalidLogin= false;
        this.router.navigate(['home']);
      },error=>{
        this.invalidLogin=true;  
        console.log(error);

      }
      
    )
  }


}
