const Employee = require('./Employee')

function Manager(name, id, email, phone) {
    this.type = 'Manager'
    this.name = name
    this.id = id
    this.email = email
    this.info = 'Phone'
    this.extra = phone
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.getRole = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        phone: this.extra
    }
}

Manager.prototype.getPhone = function() {
    return this.extra
}

module.exports = Manager