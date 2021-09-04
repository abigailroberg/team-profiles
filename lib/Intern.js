const Employee = require('./Employee')

function Intern(name, id, email, school) {
    this.name = name
    this.id = id 
    this.email = email
    this.school = school
}

Intern.prototype = Object.create(Employee.prototype)

Intern.prototype.getRole = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        school: this.school
    }
}

Intern.prototype.getSchool = function() {
    return this.school
}

module.exports = Intern