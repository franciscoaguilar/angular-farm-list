// import mongoose from 'mongoose';
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


let EmployeeDetails = new Schema({
  hours: {
    type: String
  },
  rate: {
    type: String
  }
  // status: {
  //   type: String,
  //   default: 'Open'
  // }
});

module.exports = EmployeeDetails;
// export default mongoose.model('EmployeeDetails', EmployeeDetails);
