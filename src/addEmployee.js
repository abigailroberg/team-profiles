const Manager = require("../lib/Manager")
const renderPage = require("./generateHTML")

// create array to hold all employee objects
const teamArr = []

// function to add manager obj to teamArr
function addMgr(data) {
    const mgr = new Manager(data.name, data.id, data.email, data.phone)
    teamArr.push(mgr)
    renderPage(teamArr)
}

module.exports = addMgr