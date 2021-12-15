import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import{ClientService} from "../../Services/client.service"
import{Client} from "../../models/Client";
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  addClientForm !:  FormGroup;
  constructor(private clientService: ClientService,private router: Router) { }

  ngOnInit(): void {

    this.addClientForm = new FormGroup(
      {
        categorieClient: new FormControl('',[Validators.required]),
        nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        email: new FormControl('',Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")),
        password: new FormControl('',Validators.minLength(8)),
        profession: new FormControl('',[Validators.required]),
        dateNaissance: new FormControl('',Validators.pattern("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$")),
      }
    );
  }
  
  addClient(){
    let clientToAdd=new Client(this.addClientForm.get('categorieClient')?.value,this.addClientForm.get('nom')?.value,this.addClientForm.get('prenom')?.value,this.addClientForm.get('email')?.value,this.addClientForm.get('password')?.value,this.addClientForm.get('profession')?.value,this.addClientForm.get('dateNaissance')?.value);
    console.log(clientToAdd)
  
    this.clientService.addClient(clientToAdd).subscribe(
      res=>{
        
        console.log(res)
        this.router.navigate(['home/clientretrieve']);
      }
    )
  
  }

  




  

}
