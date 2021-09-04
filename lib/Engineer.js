const Employee = require('./Employee')

function Engineer(name, id, email, github) {
    this.name = name
    this.id = id
    this.email = email
    this.github = github
}

Engineer.prototype = Object.create(Employee.prototype)

Engineer.prototype.getRole = function() {
    return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
    }
}

Engineer.prototype.getGithub = function() {
    return this.github
}

module.exports = Engineer