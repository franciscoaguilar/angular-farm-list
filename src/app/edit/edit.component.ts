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
  [x: string]: any;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

id: String;
    editedEmployee: EmployeeInterface = new Employee();
  employees: EmployeeInterface[];
  employee : EmployeeInterface;









// ***************************************test **********************************




  ngOnInit() {
    this.route.paramMap.
    subscribe(params => {
      let id = params.get('id');
      this.employeeService.getEmployeeById(id).
      subscribe(res => {
        this.employee = res;
        console.log(res);
      });
    })
  }
  updateEmployee( employee: EmployeeInterface){
    this.employeeService.editEmployee( employee).subscribe(()=>{
      console.log('succes');
    });


  }

}
