fetch("https://api.github.com/users/dev-alissonalves") //Requisição para acessar api do github
.then(response => response.json())//promessa retornada e convertida para um arquivo JSON
.then(data => fetch(data.repos_url)) //promessa retornando a lista de repositórios
.then(repos => repos.json()) //promessa retornando a conversão dos repositórios em um arquivo json
.then(result => console.log(result)) //promessa para imprimir a lista de repositórios no console.log