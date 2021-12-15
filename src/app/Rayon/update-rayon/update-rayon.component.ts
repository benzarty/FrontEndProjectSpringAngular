import { Route } from '@angular/compiler/src/core';
import { RayonService } from './../../Services/rayon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Rayon } from './../../models/Rayon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: ['./update-rayon.component.css']
})
export class UpdateRayonComponent implements OnInit {

  rayonToUpdate!: Rayon;

  updateRayonForm = new FormGroup(
    {
      code: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      libelle: new FormControl('',[Validators.required,  Validators.minLength(3), Validators.maxLength(30)])
    });
  constructor(private activatedRoute: ActivatedRoute, private rayonService: RayonService, private router: Router) { }

  ngOnInit(): void {

    let id = this.activatedRoute.paramMap.subscribe(
      params=> {
        var id = parseInt(<string>params.get('id'));
        console.log(id);
        this.rayonService.getRayonById(id).subscribe(
          data=> {
            console.log("Data fetched successfully");
            this.rayonToUpdate = data;
            this.updateRayonForm.controls['code'].setValue(this.rayonToUpdate.code);
            this.updateRayonForm.controls['libelle'].setValue(this.rayonToUpdate.libelle);
          },
          error => console.log("Exception on fetching rayon by id ")
        )
      }
    )
  }

  updateRayon() {
    //Fetching data from form and making our object ready for persistence
    this.rayonToUpdate.code = this.updateRayonForm.get('code')?.value;
    this.rayonToUpdate.libelle = this.updateRayonForm.get('libelle')?.value;

    console.log("rayon to update")
    console.log(this.rayonToUpdate)
    //committing
  this.rayonService.updateRayon(this.rayonToUpdate).subscribe(

    res=> {
      console.log("Rayon updated")
      console.log(res)
      this.router.navigate(['../../list-rayon'], {relativeTo: this.activatedRoute})
    }
  );


  }
}
