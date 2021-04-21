const Sequelize = require("sequelize");
const database = require("../config/database");

const Proyecto = database.define("noticia", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: Sequelize.STRING,
  subtitulo: Sequelize.STRING,
  descripcion: Sequelize.TEXT,
  autor: Sequelize.STRING,
  imagen: Sequelize.STRING,
  categoria: Sequelize.STRING,
  fecha: Sequelize.DATE,
});

module.exports = Proyecto;
