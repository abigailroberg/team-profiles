const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const renderPage = require('./src/generateHTML')
const fs = require('fs')
const { resolve } = require('path')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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
    // create new Manager from inputs & add to team array
    .then(mgrInput => {
        const mgr = new Manager(mgrInput.name, mgrInput.id, mgrInput.email, mgrInput.phone)
        teamArr.push(mgr)
    })
}

// prompt user for info about other employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Which type of employee would you like to add?',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(({ type }) => {
        // prompt user for info about engineer
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
                },
                {
                    type: 'confirm',
                    name: 'add',
                    message: 'Would you like to add another employee?',
                    default: false
                }
            ])
            // create new Engineer from inputs
            .then(employeeData => {
                const eng = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
                // add new Engineer to array
                teamArr.push(eng)
                // start addEmployee() if user said to add another
                if(employeeData.add) {
                    return addEmployee()
                } else {
                    return
                }
            })
        }
        // Prompt user for info about an Intern
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
                name: 'school',
                message: 'School:'
            },
            {
                type: 'confirm',
                name: 'add',
                    message: 'Would you like to add another employee?',
                    default: false
            }
        ])
        // Create new Intern from inputs
        .then(employeeData => {
            const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
            // add new Intern to array
            teamArr.push(intern)
            // start addEmployee() if user said to add another
            if(employeeData.add) {
                return addEmployee()
            } else {
                return
            }
        })
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

// function to initialize app
function init() {
    // get manager
    mgrInput()
    // after manager add employee
    .then(mgrInputData => {
        return addEmployee()
    })
    // after all employees added, use write html to file
    .then(addEmployeeData => {
        writeToFile('./dist/index.html', renderPage(teamArr))
    })
    // catch and log any error in the console
    .catch((err) => {
        console.log(err)
    })
}

init()