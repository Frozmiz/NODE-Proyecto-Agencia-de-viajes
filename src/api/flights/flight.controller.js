const Flight = require("./flight.model");

const indexGet = async(req, res, next) => {
    console.log("ruta to indexGet works!");
    const flights = await Flight.find();
    return res.status(200).json(flights);
};


module.exports = {
    indexGet,
    
};