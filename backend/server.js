import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import MongoClient from 'mongoose';

import Employee from './models/Employee';
import EmployeeDetails from './models/Employee-details';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017/employees', { useNewUrlParser: true });

const connection = MongoClient.connection;

connection.once('open', () => {
  console.log('mongodb database connection established ');
});

router.route('/employees').get((req, res) => {
  Employee.find((err, employees) => {
    if (err)
      console.log(err);
    else
      res.json(employees)
  });
});

router.route('/employees/:id').get((req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err)
      console.log(err);
    else {
      res.json(employee);
    }
  });
});

router.route('/employees/add').post((req, res) => {
  console.log('requested body',req.body);
  let employee = new Employee({
    firstName: req.body.firstName,
  lastName: req.body.lastName});
  employee.save()
    .then(employee => {
      res.status(200).json({
        'employee': 'Added sucsfully'
      });
    })
  .catch(err => {
    res.status(400).send('failed to create new record');
  });
});
//attemptint to add missing piece
// router.route('/employees/add/details/:id').post((req, res) => {
//   Employee.findById(req.params.id, (err, employee) => {
//     if (!employee)
//       return new Error('Cold not load document')
//       else{
//   console.log('requested details', req.body);
//   let employeeDetails = new EmployeeDetails(req.body);
//   employeeDetails.save()
//   .then(employeeDetails => {
//     res.status(200).json({
//       'employee-detals': 'added succesfully details'
//     });
//   })
//   .catch(err => {
//     res.status(400).send('failed to create new record');
//   });
// }
// });
// });


router.route('/employees/details/:id').post((req, res) => {
Employee.findOneAndUpdate({_id:req.params.id}, (err, employee) => {
  if (!employee)
    return new Error('Cold not load document');
    else{
    {$push: {employeeDetails: {hours: req.body.hours
 }}};
    employee.save().then(employee => {
      res.json('update done');
    }).catch(err => {
      res.status(400).send('update failed')
    });
  }

})
});



router.route('/employees/edit/:id').put(async (req, res) =>{
  // const { id } = req.params;
  const employee = {
  firstName: req.body.firstName,
  lastName: req.body.lastName
  }
  await Employee.findOneAndUpdate({_id: req.params.id}, {$set: employee}, {new: true});
  res.json({status: 'Employeee Updated '});
});

router.route('/employees/delete/:id').delete((req, res) => {
  Employee.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
    if(err)
      res.json(err);
    else
      res.json('Remove succesfully');
  });
});

app.use('/', router);

app.listen(4000, () => console.log('express server running on port 4000'))
