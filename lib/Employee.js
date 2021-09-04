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
}

module.exports = Employee

