import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {


  clientToUpdate !:Client;
  updateClientForm = new FormGroup( {
    
    categorieClient: new FormControl,
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    profession: new FormControl(),
    dateNaissance: new FormControl(),
  })
  constructor(private activatedRoute: ActivatedRoute,private clientService: ClientService,private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.paramMap.subscribe(
      params => {
        var id = parseInt(<string>params.get('id'));
        console.log(id);
        this.clientService.getClientById(id).subscribe(
          data => {
            console.log("Data fetched successfully");
            this.clientToUpdate = data; // This line allows us to update the view in a smooth way
            this.updateClientForm.setControl('categorieClient', new FormControl(this.clientToUpdate.categorieClient));
            this.updateClientForm.setControl('nom', new FormControl(this.clientToUpdate.nom));
            this.updateClientForm.setControl('prenom', new FormControl(this.clientToUpdate.prenom));
            this.updateClientForm.setControl('email', new FormControl(this.clientToUpdate.email));
            this.updateClientForm.setControl('password', new FormControl(this.clientToUpdate.password));
            this.updateClientForm.setControl('profession', new FormControl(this.clientToUpdate.profession));
            this.updateClientForm.setControl('dateNaissance', new FormControl(this.clientToUpdate.dateNaissance));

          },
          error => console.log("Exception on fetching stock by id ")


        )

      }

    )
  }


  updateClient(client: Client) {

    console.log("here :");
    console.log(this.updateClientForm.get('categorieClient')?.value);
     // this.clientToUpdate.categorieClient = parseInt(this.updateStockForm.get('qte')?.value);
      this.clientToUpdate.categorieClient= this.updateClientForm.get('categorieClient')?.value;
      this.clientToUpdate.nom= this.updateClientForm.get('nom')?.value;
      this.clientToUpdate.prenom= this.updateClientForm.get('prenom')?.value;
      this.clientToUpdate.email= this.updateClientForm.get('email')?.value;
      this.clientToUpdate.password= this.updateClientForm.get('password')?.value;
      this.clientToUpdate.profession= this.updateClientForm.get('profession')?.value;
      this.clientToUpdate.dateNaissance= this.updateClientForm.get('dateNaissance')?.value;

      
      
      console.log(this.clientToUpdate);
  
    this.clientService.updateClient(client).subscribe(
      res=>{
        console.log("Client updated")
        console.log(res)
        this.router.navigate(['home/clientretrieve']);
      }
    )
  
  
    }



}
