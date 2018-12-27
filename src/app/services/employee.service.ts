import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { EmployeeDetailsInterface } from '../interfaces/employee-details-interface';
import{ Employee } from '../models/employee';
import { EmployeeInterface } from '../interfaces/employee-interface';
import { EmployeeDetails } from '../models/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// private employee: Employee

  url = 'http://localhost:4000';
  employees: Employee[];
  selectedEmployee: EmployeeInterface = new Employee();

  constructor(private http: HttpClient ) { }


// test
getEmployee(id: string){
    return this.http.get(`/employee/?tail=${id}`);
  }
  // end trst
  getEmployees () {
    return this.http.get(`${this.url}/employees`);
  }

  getEmployeeById(id): Observable<any> {
    return this.http.get(`${this.url}/employees/${id}`);
  }
  addEmployees(newEmployee){

  return this.http.post(`${this.url}/employees/add`, newEmployee);
}
addEmployeeDetails(employeeDetails:  EmployeeDetailsInterface){
return this.http.post(`${this.url}/employees/add/details/${employeeDetails._id}`, employeeDetails);
}
editEmployee(editedEmployee:  Employee){
  return this.http.put(`${this.url}/employees/edit/${editedEmployee._id}`, editedEmployee);
}



deleteEmployee(id) {
  return this.http.delete(`${this.url}/employees/delete/${id}`)
}

}
