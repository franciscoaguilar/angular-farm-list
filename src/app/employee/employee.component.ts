import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/employee';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { EMPLOYEES } from '../mocks/mock-employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees: EmployeeInterface[];
  editedEmployee: EmployeeInterface = new Employee();
  newEmployee: EmployeeInterface = new Employee();

  constructor() { }

  addEmployee(){
    const lastIndex: number = this.employees.length-1;
    const last: EmployeeInterface = this.employees[lastIndex];
    this.newEmployee.id = last.id + 1;
    console.log('apple');
    if(this.newEmployee.name.trim().length >=1){
      this.employees.push(this.newEmployee);
      this.newEmployee = new Employee();
console.log('apple');

    }
    console.log('apple');
  }
  getEmployees(filter: String){
    if(filter === 'all') {
      this.employees = EMPLOYEES;
    console.log('yes');}
    else {
      let filteredEmployees=[];
      console.log('no');
    }
  }
getEditedEmployee(employee){
  this.editedEmployee = employee;
}

  ngOnInit() {
    this.getEmployees('all');
  }

}
