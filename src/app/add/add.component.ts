import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';
import { EmployeeDetails } from '../models/employee-details';

import { EmployeeDetailsInterface } from '../interfaces/employee-details-interface';


import { Employee } from '../models/employee';
import { EmployeeInterface } from '../interfaces/employee-interface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  newEmployeeDetails: EmployeeDetailsInterface = new EmployeeDetails;
  employeeDetails: EmployeeDetailsInterface[];
  id: String;


  employee: EmployeeInterface = new Employee;
  // employee : any = {};

  addEmployeeDetails(){
    this.employeeService
    .addEmployeeDetails(this.id, this.newEmployeeDetails)
    .subscribe((data: EmployeeDetailsInterface[]) => {
      // this.employeeDetails = data;
      console.log('added-details');
      console.log(this.newEmployeeDetails);
    })

    // this.employeeService.addEmployeeDetails(this.id, employeeDetails).subscribe(() =>{
    //   this.newEmployeeDetails = employeeDetails;
    //   console.log(' employee componenet');
    //
    // })
    // console.log('edit employee componenet');
  }

  ngOnInit() {
  }

}
