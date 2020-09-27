function managerCard(data) {
  return `
        <div class="card employee-card m-2 col-sm">
        <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
        <div class="card-header manager-header">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-title">Manager</h3>
            <h4 class="card-title"><i class="fas fa-users"></i></h4>
            </div>
        <div class="card-body manager-body">
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
