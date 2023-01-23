const express = require("express");
// const { upload, uploadToCloudinary } = require('../../middlewares/files.middleware');
const controller = require("./booking.controller");


const router = express.Router();

router.get("/", controller.indexGet);
//[upload.single("image"), uploadToCloudinary], 
router.post("/create", controller.createPost);
router.put("/edit/:id", controller.editPut);
router.delete("/delete/:id", controller.deleteBooking);

module.exports= router;