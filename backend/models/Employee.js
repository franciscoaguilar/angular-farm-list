// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// import { EmployeeDetails } from '../models/Employee-details';
const EmployeeDetails = require('../models/Employee-details')
const Schema = mongoose.Schema;


//change the employeechema back to employee
let EmployeeSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  employeeDetails: {
      type: [EmployeeDetails],

    }
});


// let Employee = new Schema({
//   firstName: {
//     type: String
//   },
//   lastName: {
//     type: String
//   },
//   days: {
//     hours: {
//       type: Number
//     },
//     rate: {
//       type: Number
//     },
//     status: {
//       type: String,
//       default: 'Open'
//     }
//   }
//
//
// });

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;
// export default mongoose.model('Employee', Employee);
