import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  reactFormSample = new FormGroup({
    firstname : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
    lastname : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    email : new FormControl('',[Validators.email]),
    gender : new FormControl('',[Validators.required]),
    ismarried : new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.reactFormSample.value);
  }
}
