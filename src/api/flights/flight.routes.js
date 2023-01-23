const express = require("express");

const controller = require("./flight.controller");

const router = express.Router();

// ruta /flights/
router.get("/", controller.indexGet);

// ruta /flights/xxxxxxxxxx
router.get("/:id", controller.getById);

// ruta /flights/create
router.post("/create", controller.createPost);

// ruta /flights/edit/xxxxxxx
router.put("/edit/:id", controller.editPut);

// ruta /flights/delete/xxxxxxx
router.delete("/delete/:id", controller.deleteFlight);

module.exports = router;