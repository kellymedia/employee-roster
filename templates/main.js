function mainHTML(data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
          <script src="https://kit.fontawesome.com/73f6284828.js" crossorigin="anonymous"></script>

          <style>
              .jumbotron {
                  background-color: #4d194d;
              }
              body {
                  background-color: #EDFBFD;
              }
              h1 {
                  color: #1B3A4B;
              }
              .card-header, .card-body {
                  background-color: #B2F5FA;
              }
          </style>
      </head>
      
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${data}
                  </div>
              </div>
          </div>
      </body>
      
      </html>
  `;
  }
  // export mainRender
  module.exports = mainHTML;
  