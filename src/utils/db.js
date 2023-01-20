
// CONFIGURACIÓN CONEXIÓN CON BASE DE DATOS MONGO ATLAS

const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://admin:admin@cluster0.xnwdy8i.mongodb.net/AgencyTravelPandemicAirs"

const connectDB = async() => {
    try {
        mongoose.set("strictQuery", "true");
        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;
        console.log(`[SERVER] conectado con éxito a ${name} en host ${host}`)
    } catch (error) {
        console.log("[SERVER ERROR]", error);
    }
};

module.exports = {
    connectDB,
}