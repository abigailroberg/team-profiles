module.exports = function() {}

function Employee(name, id, email) {
    this.name = name
    this.id = id
    this.email = email

    this.getRole = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email
        }
    }

    this.getName = function() {
        return this.name
    }

    this.getId = function() {
        return this.id
    }

    this.getEmail = function() {
        return this.email
    }
}

module.exports = Employee

