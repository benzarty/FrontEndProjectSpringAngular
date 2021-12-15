import { Component, OnInit } from '@angular/core';
import {Rayon} from "../../../models/rayon/rayon";
import {RayonService} from "../../../services/rayon/rayon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-rayon',
  templateUrl: './list-rayon.component.html',
  styleUrls: ['./list-rayon.component.css']
})
export class ListRayonComponent implements OnInit {
rayons !: Rayon[];

  totalLength !: number
  page: number = 1

  searchQuery: any;
  constructor(private rayonService: RayonService,private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.rayonService.getRayon().subscribe(
      res => {
        console.log("Fetching Rayon successful")
        this.rayons = res;
        this.totalLength = res.length
      }
    )
  }

  goToUpdateRayon(id: number) {
    this.router.navigate(['../update-rayon', id] ,{ relativeTo: this.route});

  }

  goToDeleteRayon(id: number) {
    this.rayonService.deleteRayonById(id).subscribe(

      res=> {
        console.log("Rayon deleted")
        //this will not reload component
        //this.route.navigate(['home/list-stock']);
        this.ngOnInit()
      }
    )
  }

  search()
  {
    if (this.searchQuery ==""){
      this.ngOnInit();
    }else {
      this.rayons= this.rayons.filter(res => {return res.code.toLocaleLowerCase().match(this.searchQuery.toLocaleLowerCase())})
    }
  }
}
