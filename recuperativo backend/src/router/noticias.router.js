const { Router } = require("express");
const multer = require("../config/multer");
const NoticiasController = require("../controller/noticias.controller");
const ctrl = new NoticiasController();
const router = Router();
router.get("/", ctrl.inicio);
router.get("/agregar", ctrl.agregarNoticia);
router.get("/noticiasDetalle/:id", ctrl.noticiaUnica);
router.get("/noticiaEditar/:id", ctrl.noticiaEditar);
router.post("/noticiaEditar/:id", ctrl.noticiaEditarSubmit);
router.use("/noticiaEliminar/:id", ctrl.noticiaEliminar);
router.post(
  "/agregarNoticia",
  multer.single("imagen-noticia"),
  ctrl.submitNoticia
);
module.exports = router;
