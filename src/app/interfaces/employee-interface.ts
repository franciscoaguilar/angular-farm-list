
import { EmployeeDetailsInterface }from '../interfaces/employee-details-interface';

export interface EmployeeInterface {
_id?: string;
firstName: string;
lastName: string;
employeeDetails: EmployeeDetailsInterface;
}

// export interface EmployeeInterface {
//   firstName: string;
//   lastName: string;
//   days:{
//     hours: number;
//     rate: number;
//     status: string;
//   };
// }
