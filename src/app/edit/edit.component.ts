import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';





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
  employeet: Employee;
  updateForm: FormGroup;


  // editEmployee(editedEmployee){
  //   this.employeeService
  //   .editEmployee(this.editedEmployee)
  //   .subscribe((data: EmployeeInterface[]) => {
  //     this.editedEmployee = data;
  //     console.log('editedEmployee');
  //     console.log(this.employees)
  //   })
  // }
  editEmployees(form: NgForm){
      console.log('edited employee..');
    this.employeeService
    .editEmployee(form.value)
    .subscribe(res => {
      console.log(res);
      console.log('perhaps');
});
}

  // editEmployee(){
  //   this.employeeService.editEmployee(this.editedEmployee).subscribe(data  =>{
  //
  //     console.log('data');
  //     this.router.navigate(['/']);
  //
  //   })
  //   console.log('edit employee componenet');
  // }



// ***************************************test **********************************




  ngOnInit() {
    this.route.paramMap.
    subscribe(params => {
      console.log(params);
      // this.id = params.id;
      let id = params.get('id');
      console.log(id, 'id as number');
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
