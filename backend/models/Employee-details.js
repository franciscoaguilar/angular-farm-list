import mongoose from 'mongoose';

const Schema = mongoose.Schema;


let EmployeeDetails = new Schema({
  hours: {
    type: Number
  },
  rate: {
    type: Number
  },
  status: {
    type: String,
    default: 'Open'
  }
});

export default mongoose.model('EmployeeDetails', EmployeeDetails);
