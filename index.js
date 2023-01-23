const express = require("express");
const db = require("./src/utils/db");
const passport = require("passport");
const auth = require("./src/utils/auth/index");
auth.activarAutenticacion();
const { isAuth } = require("./src/utils/auth/middlewares/authMiddlewares");

db.connectDB();

//rutas importadas
const usersRoutes = require("./src/api/users/user.routes");
const indexRoutes = require("./src/api/index/index.routes");
const flightRoutes = require("./src/api/flights/flight.routes");
const hotelRoutes = require("./src/api/hotels/hotel.routes");
const bookingsRoutes = require("./src/api/bookings/booking.routes");

const PORT = 3030;

const server = express();

// Transforma el contenido o cuerpo de las peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
// Los POST de formulario llegaran como url.encode y hay que transformalas
server.use(express.urlencoded({extended: true}));

/**
 * Autenticación!
 */
// server.use(passport.initialize());
// server.use(passport.session());

server.use("/users", usersRoutes);
server.use("/flights", flightRoutes);
server.use("/hotels", hotelRoutes);
// [isAuth],
server.use("/bookings", bookingsRoutes);
server.use("/", indexRoutes);


server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})