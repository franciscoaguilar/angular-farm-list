import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

id: String;
    editedEmployee: EmployeeInterface = new Employee();
  employees: EmployeeInterface[];
  employee : any = {};


  // editEmployee(id){
  //   this.employeeService
  //   .editEmployee(id, this.editedEmployee)
  //   .subscribe((data: EmployeeInterface[]) => {
  //     this.employees = data;
  //     console.log('editedEmployee');
  //     console.log(this.employees)
  //   })
  // }
  editEmployee(employee){
    this.employeeService.editEmployee(this.id, employee).subscribe(() =>{
      this.editedEmployee = employee;
      console.log(' employee componenet');

    })
    console.log('edit employee componenet');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEmployeeById(this.id).subscribe(res => {
        this.employee = res;
      })
        console.log('oninit edit');
    })
  }

}
