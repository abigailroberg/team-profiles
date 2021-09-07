const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const renderPage = require('./src/generateHTML')
const fs = require('fs')
const { resolve } = require('path')
const Engineer = require('./lib/Engineer')

// create array to hold all employee objects
const teamArr = []

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
    .then(mgrInput => {
        const mgr = new Manager(mgrInput.name, mgrInput.id, mgrInput.email, mgrInput.phone)
        teamArr.push(mgr)
    })
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
        if(add === 'Yes') {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'Which type of employee would you like to add?',
                    choices: ['Engineer', 'Intern']
                }
            ])
        }
    })
    .then(({ type }) => {
        if(type === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Employee Name:'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Employee ID:'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Email Address:'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'GitHub username:'
                }
            ])
            .then(addEmployee => {
                const eng = new Engineer(addEmployee.name, addEmployee.id, addEmployee.email, addEmployee.github)
                teamArr.push(eng)
                console.log(teamArr)
            })
        }
    })
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
        writeToFile('./dist/index.html', renderPage(teamArr))
    })
       
    .catch((err) => {
        console.log(err)
    })
}

init()