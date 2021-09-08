// generate html code for each employee card
function renderEmployees(employeeArr) {
    let htmlText =''
    employeeArr.forEach(element => {
        htmlText = htmlText + 
        `
        <div class="col-4">
            <div class="card mgn-btm" id="cards">
                <h4 class="card-header text-center bg-primary text-white">${element.name}</br>
                    <span class="font-weight-light">${element.type}</span>
                </h4>
                <p class="card-body">
                    <span class="font-weight-bold">ID:</span> ${element.id}</br>
                    <span class="font-weight-bold">Email:</span> ${element.email}</br>
                    <span class="font-weight-bold">${element.info}:</span> ${element.extra}</br>
                </p>
            </div>
        </div>`
    })
    return htmlText
}

// generate html for page, including employee cards
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
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profiles</title>
    </head>
    
    <body>
    
        <main>
            <div class="row justify-content-center bg-danger text-white">
                <h1>My Team</h1>
            </div>

            <div class="row justify-content-center">
                ${employees}
            </div>
        </main>
    </body>`
}

module.exports = renderPage