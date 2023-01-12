const url = "https://api.github.com/users/dev-alissonalves"

function getUsers()
{
    fetch(url)
    .then(response => console.log(response.json()))
}

getUsers()