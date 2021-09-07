const Employee = require('./Employee')

function Intern(name, id, email, school) {
    this.type = 'Intern'
    this.name = name
    this.id = id 
    this.email = email
    this.info = 'School'
    this.extra = school
}

Intern.prototype = Object.create(Employee.prototype)

Intern.prototype.getRole = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        school: this.extra
    }
}

Intern.prototype.getSchool = function() {
    return this.extra
}

module.exports = Intern