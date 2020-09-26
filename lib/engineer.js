
const employee = require('./employee');

class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  enterGithub() {
    return this.github;
  }

  enterRole() {
    return 'Engineer';
  }
}

module.exports = engineer;