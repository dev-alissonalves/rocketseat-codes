export class Router {

    routes = {}
    
    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        //Serve para indicar que os links redirecionam para outro lugar
        window.history.pushState({}, "", event.target.href);
        this.handle();
    }

    handle() {
        const pathname = window.location.pathname;

        // pegando uma rota - o pathname inicial é o "/" caso ele não encontre mostra o 404
        const route = this.routes[pathname] || this.routes[404];

        fetch(route)
            //função data.text() retorna o conteúdo html
            .then((data) => data.text())
            .then((html) => {
                document.querySelector("#app").innerHTML = html;
            });
    }
}
