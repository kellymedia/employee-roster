// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require('./employee');

class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  addSchool() {
    return this.school;
  }

  addRole() {
    return 'Intern';
  }
}

module.exports = intern;
