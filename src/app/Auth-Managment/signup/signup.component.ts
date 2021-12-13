import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/Signup';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signinForm !:  FormGroup;
   message: String="";

  constructor(
    private router :Router,
    private authenticationService : AuthenticationServiceService ,
    private globalVriables : GlobalService,
  ) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup(
      {
        nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',Validators.minLength(8)),
      }
    );

  }



  addSignUp(){
    console.log("adding user")
    let role :string[]= ["ROLE_USER"];
    let userToAdd=new Signup(this.signinForm.get('nom')?.value,this.signinForm.get('prenom')?.value,this.signinForm.get('username')?.value,this.signinForm.get('password')?.value,role);
    console.log(userToAdd)
  
    this.authenticationService.sinscrire(userToAdd).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['login']);
      },
      err=>{
        this.message = "Bad Credentials"
      }
    )

    

  }
}
