const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const renderPage = require('./src/generateHTML')
const fs = require('fs')
const { resolve } = require('path')
const addMgr = require('./src/addEmployee')

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

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Yes', "No"]
        }
    ])
    .then(({ add }) => {
        if(add === 'yes') {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'Which type of employee would you like to add?',
                    choices: ['Engineer', 'Intern']
                }
            ])
        }
    }
    )
}

// function to write to a file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

function init() {
    mgrInput()
    .then(mgrInputData => {
        addMgr(mgrInputData)
    })
}

init()