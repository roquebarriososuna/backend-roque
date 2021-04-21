const NoticiasModel = require("../models/noticia");
module.exports = class NoticiasController {
  async inicio(req, res) {
    const noticias = await NoticiasModel.findAll();
    try {
      if (noticias.length === 0) {
        res.render("index", {
          msg: "No hay noticias agregadas",
        });
        return;
      }
      res.render("index", {
        noticias,
      });
    } catch (error) {
      res.render("index", {
        noticias,
        error: "Ocurrio un error con las noticias",
      });
    }
  }
  agregarNoticia(req, res) {
    res.render("agregar");
  }
  async noticiaEliminar(req, res) {
    const { id } = req.params;
    await NoticiasModel.destroy({ where: { id } });
    const noticias = await NoticiasModel.findAll();
    res.render("index", { noticias, msg: "Eliminado correctamente" });
  }
  async noticiaEditar(req, res) {
    const { id } = req.params;
    const noticia = await NoticiasModel.findOne({ where: { id } });
    res.render("editarNoticia", { noticia });
  }
  async noticiaUnica(req, res) {
    const { id } = req.params;
    const noticia = await NoticiasModel.findOne({ where: { id } });
    res.render("detalle", { noticia });
  }
  async submitNoticia(req, res) {
    try {
      const noticia = { ...req.body };
      noticia.imagen = req.file.filename;
      await NoticiasModel.create({ ...noticia });
      res.render("agregar", { msg: "Noticia creada correctamente" });
    } catch (error) {
      res.render("agregar", {
        error: "Ocurrio un error creando la noticia",
      });
    }
  }
  async noticiaEditarSubmit(req, res) {
    const { id } = req.params;
    await NoticiasModel.update(
      { ...req.body },
      {
        where: { id },
      }
    );
    const noticias = await NoticiasModel.findAll();
    res.render("index", { noticias, msg: "Actualizado correctamente" });
  }
};
