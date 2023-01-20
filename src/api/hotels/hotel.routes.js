const express = require("express");

const controller = require("./hotel.controller");

const router = express.Router();

// ruta /hotels/
router.get("/", controller.indexGet);

// ruta /hotels/xxxxxxxxxx
router.get("/:id", controller.getById);

// ruta /hotels/create
router.post("/create", controller.createPost);

// ruta /hotels/edit/xxxxxxx
router.post("/edit/:id", controller.editPut);

// ruta /hotels/delete/xxxxxxx
router.delete("/delete/:id", controller.deleteHotel);

module.exports = router;