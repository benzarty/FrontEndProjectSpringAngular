import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input()
  errors!: any;
    errorMessage:  string="";
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges()
  {
    console.log("change detected")
    console.log(this.errors)
    if (this.errors.required){
      this.errorMessage="This field is required";
    }
    else if (this.errors.maxlength) {
      console.log(this.errors.maxlength)
      let max = this.errors.maxlength.requiredLength;
      this.errorMessage= "This field must not exceed "+max+" characters";
    }
    else if (this.errors.minlength){
      let min = this.errors.minlength.requiredLength;
      this.errorMessage= "This field must contains at least "+min+" characters";
    }
    else if (this.errors.pattern){
                switch (this.errors.pattern.requiredPattern){
                              case "^[1-9][0-9]*$":{
                               this.errorMessage =  "Minimum quantity must be a number between \"1\" and  \"9999\"";
                              }

                }
    }

  }


}
