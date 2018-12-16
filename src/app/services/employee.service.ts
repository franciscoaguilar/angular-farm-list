import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient ) { }

  getEmployees () {
    return this.http.get(`${this.uri}/employees`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/employees/${id}`);
  }
  addEmployees(newEmployee){

  return this.http.post(`${this.uri}/employees/add`, newEmployee);
}

editEmployee(id, editedEmploye){
  return this.http.post(`${this.uri}/employees/update/${id}`, editedEmploye);
}
deleteEmployee(id) {
  return this.http.delete(`${this.uri}/employees/delete/${id}`)
}

}
