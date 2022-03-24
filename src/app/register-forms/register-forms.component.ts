import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register-forms',
  templateUrl: './register-forms.component.html',
  styleUrls: ['./register-forms.component.css']
})
export class RegisterFormsComponent implements OnInit {

  FirstName:string="";
  LastName :string="";
  gender = "Male";
  isaccept = "true";
  selvalue = "0";
  constructor() { }

  ngOnInit(): void {

  }

  RegisterStudent(registerform: NgForm) :void
  {
   this.FirstName = registerform.controls['txtFirstName'].value;
    this.LastName = registerform.controls['txtLastName'].value;

  }

}
