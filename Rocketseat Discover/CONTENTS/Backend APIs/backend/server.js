const express = require("express");
const app = express();

app.listen("3333", () => {
  console.log("Servidor rodando na porta: 3333!");
});

app.use(express.json());

let content = "";
console.log(content);

app
  .route("/")
  .get((request, response) => {
    response.send(content);
  })
  .post((request, response) => {
    content = request.body;
    console.log(content);
    response.send(content);
  })
  .put((request, response) => {
    content = request.body;
    console.log(content);
    response.send(content);
  })
  .delete((request, response) => {
    content = ""
    response.send(content);
    console.log(content);
  });
