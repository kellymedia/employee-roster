class employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    enterName() {
      return this.name;
    }
  
    enterId() {
      return this.id;
    }
  
    enterEmail() {
      return this.email;
    }
  
    enterRole() {
      return 'Employee';
    }
  }
  
  module.exports = employee;
  