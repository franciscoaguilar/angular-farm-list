import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Employee from './models/Employee'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/employees');

const connection = mongoose.connection;

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
  let employee = new Employee(req.body);
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

router.route('/employees/update/:id').post((req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (!employee)
      return next(new Error('Cold not load document'));
    else{
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.hours = req.body.hours;
      employee.rate = req.body.rate;
      employee.status = req.body.status;

      employee.save().then(employee => {
        res.json('update done');
      }).catch(err => {
        res.status(400).send('update failed')
      });
    }
  });
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
