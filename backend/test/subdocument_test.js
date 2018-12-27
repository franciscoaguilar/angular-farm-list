const assert = require('assert');
const Employee = require('../models/employee.js');

describe('Subdocuments', () => {
  it('can create a subdocument', (done) => {
    const joe = new Employee({
    firstName: 'Franc',
    lastName: 'agu',
    employeeDetails: [{ hours: '7', rate: 5}]
    });

    joe.save(function(err){
      if(err) done(err);
      else done();
    })
  });


    joe.save()
    .then(() => Employeee.findOne({ firstName: 'Franc'}))
    .then((employee) => {
      assert(employee.employeeDetails[0].hours === '7');
      console.log('hello');
      employee.done();
    }).catch(done);
  });

});
