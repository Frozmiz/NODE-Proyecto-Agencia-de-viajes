const express = require("express");
const db = require("./src/utils/db");

db.connectDB();

//rutas importadas
const indexRoutes = require("./src/api/index/index.routes");

const PORT = 3030;

const server = express();


server.use("/", indexRoutes);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})