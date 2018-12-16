import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

   newEmployee: EmployeeInterface = new Employee;
     employees: EmployeeInterface[];

   addEmployees(){
     this.employeeService
     .addEmployees(this.newEmployee)
     .subscribe((data: EmployeeInterface[]) => {
       this.employees = data;
       console.log('added employee..');
       console.log(this.employees);
 });
}



  ngOnInit() {
  }

}
