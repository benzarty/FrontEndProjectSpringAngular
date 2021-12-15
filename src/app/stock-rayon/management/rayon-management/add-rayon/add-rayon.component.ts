import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StockService} from "../../../services/stock/stock-service";
import {ActivatedRoute, Router} from "@angular/router";
import {RayonService} from "../../../services/rayon/rayon.service";
import {Rayon} from "../../../models/rayon/rayon";

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent implements OnInit {
  addRayonForm!:  FormGroup;

  constructor(private rayonService: RayonService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.addRayonForm = new FormGroup(
      {
        code: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        libelle: new FormControl('',[Validators.required,  Validators.minLength(3), Validators.maxLength(30)])
      }
    )
  }

  addRayon() {
   let  rayonToAdd = new Rayon(this.addRayonForm.get('code')?.value,this.addRayonForm.get('libelle')?.value)
    console.log(rayonToAdd)
    this.rayonService.addRayon(rayonToAdd).subscribe(
      res=> {
        console.log("Add Rayon Successful")
        this.router.navigate(['../list-rayon'], { relativeTo: this.activatedRoute})
      }
    );
  }

  // ChangeInputFieldStatus($event: boolean) {
  //   console.log("Your form has been submitted successfully with the status"+$event)
  // }
  ChangeInputFieldStatus($event: boolean) {
    if (!$event){
      console.log("Please make sure that you follow the instruction given correctly!")
    }
  }
}
