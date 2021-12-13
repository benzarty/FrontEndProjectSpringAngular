import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Client } from '../../models/Client';
import {Router} from "@angular/router";
import { ClientService } from '../../Services/client.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-client-retrieve',
  templateUrl: './client-retrieve.component.html',
  styleUrls: ['./client-retrieve.component.css']
})
export class ClientRetrieveComponent implements OnInit,OnChanges {
  listClients: Client[];
  //listClients: any[];
  

  constructor(private http:HttpClient,private cs:ClientService, private route: Router,private services?:NotificationsService) {
   }
  ngOnChanges(changes: SimpleChanges): void {

  }
  clients: any[]=[];
   clientss !: Client[];
  ngOnInit(): void {
    this.getAllClientss();
  }

  // loadClients(){
  //   this.http.get('/api/SpringMVC/servlet/client/retrieve-all-clients').subscribe((clients : any)=>{
  //     this.clients=clients;
  //   });
  // }

  getAllClientss() {
    this.cs.getAllClients().subscribe(res => {
      this.listClients = res;
      console.log(this.listClients)
      
    });
  }

  goToUpdateClient
   (id: number) {
    this.route.navigate(['home/modify-client', id]);
  }

  goToDeleteClient(id: number) {
    this.cs.deleteClientById(id).subscribe(

      res=> {
        this.onSucces("Client Deleted");
        console.log("Client deleted")
        console.log(res)
        //this will not reload componenet
        //this.route.navigate(['home/list-stock']);
        this.ngOnInit()
      }
    )

  }

  
  onSucces(message) {
    this.services.success('success', message, {
      position: ['bottom', 'right'],
      timeOut: 6000,
      Animation: 'fade',
      showProgressBar: true,
    });
    

  }
  onError(message) {
    this.services.error('Error', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      Animation: 'fade',
      showProgressBar: true,
    });
  }

}
