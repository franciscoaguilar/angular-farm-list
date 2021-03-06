import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/employee';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { EMPLOYEES } from '../mocks/mock-employees';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees: EmployeeInterface[];
  editedEmployee: EmployeeInterface = new Employee();
  newEmployee: EmployeeInterface = new Employee();
  employe: EmployeeInterface = new Employee();
  filter = '';
  shouldReverse = false;





  constructor(public datepipe: DatePipe) { }

  addEmployee(){
    const lastIndex: number = this.employees.length-1;
    const last: EmployeeInterface = this.employees[lastIndex];
    this.newEmployee.id = last.id + 1;


      this.employees.push(this.newEmployee);
      this.newEmployee = new Employee();

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
deleteEmployee(employee){
  const remove: number = this.employees.indexOf(employee);
  if(remove!= -1){
    this.employees.splice(remove, 1)
  }
}
toggleDeleteEmployee(employee){
  employee.isDeleted = !employee.isDeleted;
}
getEditedEmployee(employee){
  this.editedEmployee = employee;
}
get filterBy() {
  return this.filter;
}
changeFilterBy(filter: string) {
  this.filter = filter;
  this.shouldReverse = false;
}


  ngOnInit() {
    this.getEmployees('all');
console.log(this.employees);
// console.log(this.getDay());

  }
  ngOnChanges(){
    console.log(this.employees);

    // console.log('apple');
  }

}
