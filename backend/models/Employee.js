import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
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

export default mongoose.model('Employee', Employee);
