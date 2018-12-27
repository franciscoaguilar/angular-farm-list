import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { EmployeeDetailsInterface } from '../interfaces/employee-details-interface';




@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  employee : EmployeeInterface;
  employeeDetails : EmployeeDetailsInterface;


  ngOnInit() {
    this.route.paramMap.
    subscribe(params => {

      let id = params.get('id');
      this.employeeService.getEmployeeById(id).
      subscribe(res => {
        this.employee = res;
        console.log(this.employee, 'response');
      });
    })
  }

  addEmployeeDetails( employeeDetails: EmployeeDetailsInterface){
    this.employeeService.addEmployeeDetails(employeeDetails).subscribe(()=>{
    
      console.log(employeeDetails, 'details being passed');
    });
  };
}
