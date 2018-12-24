import mongoose from 'mongoose';
import { EmployeeDetails } from '../models/Employee-details';

const Schema = mongoose.Schema;



let Employee = new Schema({
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

export default mongoose.model('Employee', Employee);
