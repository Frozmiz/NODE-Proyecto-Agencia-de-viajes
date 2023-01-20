const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema (
    {
        // Una solicitud GET a la URL "AgencyTravelPandemicAirs/flight/AA123" podría devolver la información completa del vuelo AA123.
        name: {
            name: String,
            require: true,
            unique: true,
        },

        starts: {
            name: String,
            require: true,
        },

        city: {
            name: String,
            
        },

        country: {
            type: String,
        },

        mail: {
            type: String, //UNIX format
            require: true,
            unique: true,
        },

    }, 
    {
        timestamps: true,
    });

    const Booking = mongoose.model("bookings", bookingSchema);

    module.exports = Booking;