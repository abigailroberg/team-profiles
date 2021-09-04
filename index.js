const inquirer = require('inquirer')
const Manager = require('./lib/Manager')

// prompt user for manager info
const mgrInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager Email Address:'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Manager Office Phone Number:'
        }
    ])
}

function init() {
    mgrInput()
    .then(mgrInputData => {
        new Manager(mgrInputData.name, mgrInputData.id, mgrInputData.email, mgrInputData.phone)
    })
}

init()