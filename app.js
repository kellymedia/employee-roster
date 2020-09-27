const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const outputPath = path.resolve(__dirname, 'result', 'team.html');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const main = require('./templates/main');

const managerCard = require('./templates/managerCard');
const internCard = require('./templates/internCard');
const engineerCard = require('./templates/engineerCard');

const fullRoster = [];

const mainApp = () => {
  console.log('Please build your team');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is your Managers name?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Please enter a name.';
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the employee id?',
        validate(value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number.';
        },
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your managers email?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Please enter an email.';
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your managers office number?',
        validate(value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number.';
        },
      },
    ])
    .then(response => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNumber
      );
      const managerCardHtml = managerCard(manager);
      fullRoster.push(managerCardHtml);
      addRosterMembers();
    });

  function addRosterMembers() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'addMembers',
          message: 'What would you like to do?',
          choices: [
            'Add an Engineer',
            'Add an Intern',
            "I'm all done. Let's see my team!",
          ],
        },
      ])
      .then(answers => {
        switch (answers.addMembers) {
          case 'Add an Engineer': {
            promptEngineer();
            break;
          }
          case 'Add an Intern': {
            promptIntern();
            break;
          }
          case "I'm all done. Let's see my team!": {
            createRoster();
            break;
          }
        }
      });
  }

  const promptEngineer = () => {
    console.log('Please enter engineer info');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'Enter engineers name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'Enter engineers id:',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'Enter engineers email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'Enter GitHub username:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a username.';
          },
        },
      ])
      .then(response => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        const engineerCardHtml = engineerCard(engineer);
        fullRoster.push(engineerCardHtml);
        addRosterMembers();
      });
  };

  const promptIntern = () => {
    console.log('Please enter intern info');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Enter interns name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: 'Enter interns Id:',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Enter interns email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Enter interns school:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a school.';
          },
        },
      ])
      .then(response => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        const internCardHtml = internCard(intern);

        fullRoster.push(internCardHtml);
        addRosterMembers();
      });
  };

  function createRoster() {
    const finalRoster = fullRoster.join('');
    fs.writeFileSync(outputPath, main(finalRoster), 'utf-8');
  }
};

mainApp();
