function engineerCard(data) {
  return `
        <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
            <div class="card employee-card m-2 col-sm">
            <div class="card-header engineer-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"></i>Engineer</h3>
                <h4 class="card-title"><i class="fas fa-code"></i></h4>
            </div>
            <div class="card-body engineer-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
                </ul>
            </div>
        </div>
    `;
}
module.exports = engineerCard;
