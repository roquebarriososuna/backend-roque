const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
const conexion = require("./config/database");
const rutasNoticias = require("./router/noticias.router");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));
app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/", rutasNoticias);
app.listen(app.get("port"), function () {
  console.log("Servidor corriendo en el puerto:", app.get("port"));
  conexion
    .sync()
    .then(() => console.log("BD Conectada"))
    .catch((error) => console.log(`Ocurrio un error con la BD: ${error}`));
});
