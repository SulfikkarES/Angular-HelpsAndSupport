import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {


  constructor() { }
  getStudent() : any[]{
    return[
      {ID:'std12',Name:'Sulfy',Age:30, Dob: '10/18/1996', Gender: 'Male', CourseFee: 12500},
    {ID:'std13',Name:'Sumayya',Age:25, Dob: '12/28/1994', Gender: 'FEMale', CourseFee: 32500},
    {ID:'mnp14',Name:'Naufal',Age:32, Dob: '08/22/1995', Gender: 'FEMale', CourseFee: 6500},
    {ID:'gnr15',Name:'Sainuuu',Age:30, Dob: '03/16/1993', Gender: 'Male', CourseFee: 81400},
    {ID:'vip16',Name:'Sample',Age:25, Dob: '02/25/1999', Gender: 'Male', CourseFee: 6666},
    {ID:'gnr173',Name:'tset',Age:32, Dob: '04/21/1998', Gender: 'FEMale', CourseFee: 7500}

    ];
  }

  }

