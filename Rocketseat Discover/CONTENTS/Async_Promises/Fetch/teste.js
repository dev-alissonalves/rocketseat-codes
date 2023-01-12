const url = "https://api.mercadolibre.com/sites/MLB/search?q=$computador";

function getData()
{
    fetch(url)
    .then(response => response.json())
}

let data = getData()