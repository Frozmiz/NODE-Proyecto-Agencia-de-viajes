const express = require("express");

const controller = require("./flight.controller");

const router = express.Router();

// ruta /flights/
router.get("/", controller.indexGet);


module.exports = router;