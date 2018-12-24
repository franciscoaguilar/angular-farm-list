// export class Employee {
//   firstName: string;
//   lastName: string;
//   hours: number;
//   rate: number;
//   status: string;
// }

// export class Employee {
// firstName: string;
// lastName: string;
// days:{
//   hours: number;
//   rate: number;
//   status: string;
// };
// }

import { EmployeeDetails } from  '../models/employee-details';

export class Employee {
  constructor(_id ='', firstName ='', lastName=''){
    this._id = _id;
    this.firstName = firstName;
    this.lastName =  lastName
  }
  _id?: string;
  firstName: string;
  lastName: string;
  employeeDetails: EmployeeDetails;

}
