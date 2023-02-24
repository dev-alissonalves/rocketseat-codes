const routes = {
    "./": "./SPA/pages/home.html",
    "/about": "./SPA/pages/about.html",
    "/contato": "./SPA/pages/contato.html",
    404: "./SPA/pages/404.html",
};

function route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handle();
}
// ou pode ser feito assim const { pathname } = window.location
function handle() {
    const pathname = window.location.pathname;
    const route = routes[pathname] || routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
    
    console.log(route);
}

handle()
