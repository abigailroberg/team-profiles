// generate html code for each employee card
function renderEmployees(employeeArr) {
    let htmlText =''
    employeeArr.forEach(element => {
        htmlText = htmlText + 
        `<div class="col-2">
         <div class="card">
            <h4 class="card-header">${element.name}</h4>
            <h4 class="card-header">Manager</h4>
            <h5 class="card-body">ID: ${element.id}</h5>
            <h5 class="card-body">Email: ${element.email}</h5>
        </div>
    </div>`
    })
    return htmlText
}

function renderPage(employeeArr) {
    const employees = renderEmployees(employeeArr)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profiles</title>
    </head>
    
    <body>
    
        <main>
            <div class="row justify-content-center bg-primary text-white">
                <h1>My Team</h1>
            </div>
            <div class="row">
            ${employees}
            </main>
            </body>`
}

module.exports = renderPage