const Employee = require('./Employee')

function Engineer(name, id, email, github) {
    this.type = 'Engineer'
    this.name = name
    this.id = id
    this.email = email
    this.info = 'GitHub'
    this.extra = github
}

Engineer.prototype = Object.create(Employee.prototype)

Engineer.prototype.getRole = function() {
    return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.extra
    }
}

Engineer.prototype.getGithub = function() {
    return this.extra
}

module.exports = Engineer