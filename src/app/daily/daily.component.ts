import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';

import { EmployeeInterface } from '../interfaces/employee-interface';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  employees: EmployeeInterface[];
  filter = '';
  shouldReverse = false;
  date = Date.now();

  constructor(private employeeService: EmployeeService, private router: Router, public datepipe: DatePipe) { }



fetchEmployees(filter?: String) {
  if (filter === 'all') {this.employeeService
  .getEmployees()
  .subscribe((data: EmployeeInterface[]) => {
    this.employees = data;
    console.log('Data requested ..');
    console.log(this.employees)
  });
}
 else {
   const filteredEmployees = [];
   const employees: any = this.employeeService
   .getEmployees();
   this.employees = filteredEmployees;
 }
}
editEmployee(id){
  this.router.navigate([`/edit/${id}`]);
}
deleteEmployee(id) {
  this.employeeService.deleteEmployee(id).subscribe(() =>{
    console.log('delet');
    this.fetchEmployees();
  });
}

get filterBy(){
  return this.filter;
}

changeFilterBy(filter: string) {
  this.filter = filter;
  this.shouldReverse = false;
}

get isReversed() { return this.shouldReverse; }
toggleReverse() { this.shouldReverse = !this.shouldReverse; }

submitDailyList(employees) {
 this.employeeService.getEmployees().forEach((date) => {date.date = "7/7"})
}
ngOnInit() {
  this.fetchEmployees('all');
}
}
