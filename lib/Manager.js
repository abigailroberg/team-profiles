const Employee = require('./Employee')

function Manager(name, id, email, phone) {
    this.name = name
    this.id = id
    this.email = email
    this.phone = phone
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.getRole = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        phone: this.phone
    }
}

module.exports = Manager