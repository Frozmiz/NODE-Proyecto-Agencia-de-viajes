const express = require("express");
const db = require("./src/utils/db");

db.connectDB();

//rutas importadas
const indexRoutes = require("./src/api/index/index.routes");
const flightRoutes = require("./src/api/flights/flight.routes");
const hotelRoutes = require("./src/api/hotels/hotel.routes");

const PORT = 3030;

const server = express();

// Transforma el contenido o cuerpo de las peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
// Los POST de formulario llegaran como url.encode y hay que transformalas
server.use(express.urlencoded({extended: true}));


server.use("/", indexRoutes);
server.use("/flights", flightRoutes);
server.use("/hotels", hotelRoutes);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})