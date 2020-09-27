function managerCard(data) {
    return `
      <div class="card employee-card m-2 col-3">
        <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
        <div class="card-header">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office number: ${data.officeNumber}</li>
            </ul>
        </div>
        </div>
    `;
  }
  
  module.exports = managerCard;
  