const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços web de forma fácil'
        },
        {
            title: 'E',
            message: 'ficiência: EJS é altamente eficiente, permitindo que as páginas da web sejam carregadas rapidamente. Isso é especialmente importante para sites que dependem de muitas interações com o usuário ou de grande volume de dados.'
        },
        {
            title: 'M',
            message: 'odularidade: EJS permite que os desenvolvedores criem módulos reutilizáveis que podem ser facilmente integrados em diferentes partes do aplicativo. Isso ajuda a manter o código organizado e a facilitar a manutenção.'
        },
        {
            title: 'A',
            message: 'daptabilidade: EJS é altamente adaptável e pode ser usado com diferentes frameworks, incluindo Express, Kraken, Hapi e Sails.'
        },
        {
            title: 'I',
            message: 'nteratividade: EJS permite que os desenvolvedores criem páginas da web interativas, que podem responder a eventos e interações do usuário em tempo real. Isso significa que os usuários podem ter uma experiência mais envolvente e interativa.'
        },
        {
            title: 'S',
            message: 'implicidade: EJS é fácil de aprender e usar, tornando-se uma opção popular para iniciantes e desenvolvedores experientes que desejam criar rapidamente páginas da web dinâmicas.'
        },
    ];
    res.render('pages/index', {qualitys: items});
})

app.get('/sobre', function (req, res) {
    res.render('pages/about');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})