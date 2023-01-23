const mongoose = require("mongoose");

const flightSchema = mongoose.Schema (
    {
        // Una solicitud GET a la URL "AgencyTravelPandemicAirs/flight/AA123" podría devolver la información completa del vuelo AA123.
        number: {
            type: String,
            require: [true, "Cada vuelo debe de tener un número único"],
            unique: true,
        },

        company: {
            type: String,
            require: true,
        },

        countryOrigin: {
            type: String,
            
        },

        cityDestiny: {
            type: String,
            
        },

        countryDestiny: {
            type: String,
            
        },

        cityDestiny: {
            type: String,

        },

        schedule: {
            type: String, //UNIX format
        },

        price: {
            type: Number,
        },

    }, 
    {
        timestamps: true,
    });

    const Flight = mongoose.model("flights", flightSchema);

    module.exports = Flight;