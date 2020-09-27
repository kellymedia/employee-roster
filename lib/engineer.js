
const employee = require('./employee');

class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  addGithub() {
    return this.github;
  }

  addRole() {
    return 'Engineer';
  }
}

module.exports = engineer;