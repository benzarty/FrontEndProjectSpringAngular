import { Rayon } from './../../models/Rayon';
import { Router, ActivatedRoute } from '@angular/router';
import { RayonService } from './../../Services/rayon.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent implements OnInit {

  addRayonForm!:  FormGroup;

  constructor(private RayonService: RayonService, private router: Router,private activatedRoute:ActivatedRoute) { }

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
    this.RayonService.addRayon(rayonToAdd).subscribe(
      res=> {
        console.log("Add Rayon Successful")
        this.router.navigate(['../list-rayon'], { relativeTo: this.activatedRoute})
      }
    );
  }
}
