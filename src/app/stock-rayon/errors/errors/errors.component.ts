import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input()
  errors!: any;
  @Input()
  recievedForm!: FormGroup;
  formStatus!: boolean;
  @Output()
  formStatusEvent = new EventEmitter<boolean>();
    errorMessage:  string="";
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges()
  {

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
    console.log("Here")
    console.log(this.errors)
   this.checkFormStatus();

  }

  checkFormStatus(){
    if(this.recievedForm.valid){
  this.formStatus = true
      this.formStatusEvent.emit(this.formStatus)
    }else {
      this.formStatus = false
      this.formStatusEvent.emit(this.formStatus)
      this.formStatus= false
    }
  }


}
