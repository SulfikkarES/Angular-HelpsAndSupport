import { Component, OnInit } from '@angular/core';
import { PipeNamePipe } from '../pipe-name.pipe';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[StudentListService]
})
export class HomeComponent implements OnInit {
  txtval = 'Sulfikkar';
  val='';
  valid= true;



  constructor(private studentServoce: StudentListService) {
    this.studentList = this.studentServoce.getStudent();
   }

  studentList : any[]=[

  ];



  ngOnInit(): void {

  }

}
