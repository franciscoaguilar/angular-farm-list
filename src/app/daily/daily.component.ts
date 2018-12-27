import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';

import { EmployeeInterface } from '../interfaces/employee-interface';
import { DatePipe } from '@angular/common';
import { Employee } from '../models/employee';



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
  editedEmployee: EmployeeInterface = new Employee();

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

//this is the same as using rouerlink to send to a different componenet
// getEditedEmployee(employee: Employee){
//   this.editedEmployee = employee;
//   // this.employeeService.selectedEmployee = employee;
//   this.router.navigate([`/edit/${employee._id}`]);
// }


// addEmployeeDetails(id){
//   this.router.navigate([`/details/${id}`]);
// }
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

}
apple = {
  colors:{
    first: "blue",
    second: "red"
  },
  taste: "good"
}


ngOnInit() {
  this.fetchEmployees('all');
  console.log(this.apple.colors.second);



}
ngOnChange(){
    this.fetchEmployees('all');
}
}
