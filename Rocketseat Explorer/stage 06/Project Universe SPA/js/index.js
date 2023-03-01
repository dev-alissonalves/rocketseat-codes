const wallPaper = document.querySelector("body");
const routes = {
    "/": "../pages/home/home.html",
    "/universo": "../pages/universo/universo.html",
    "/explorar": "../pages/explorar/explorar.html",
    404: "/pages/404.html",
};

function route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handle();
}

function handle() {
    const pathname = window.location.pathname;
    // pegando uma rota - o pathname inicial é o "/" caso ele não encontre mostra o 404
    const route = routes[pathname] || routes[404];
    if (route == "../pages/universo/universo.html") {
        wallPaper.style.backgroundImage = "../images/img-universo.png"
        console.log(wallPaper)
    }
    //função data.text() retorna o conteúdo html
    fetch(route)
        .then((data) => data.text())
        .then((html) => {
            document.querySelector("#app").innerHTML = html;
        });
}

handle();
window.onpopstate = () => handle();
window.route = () => route();
