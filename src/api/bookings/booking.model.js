const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema (
    {
        flight: {
            type: mongoose.Types.ObjectId,
            ref: "fligts",
        },
        
        hotel: {
            type: mongoose.Types.ObjectId,
            ref: "hotels",
        },

        date: {
            type: String,
        }

    

    }, 
    {
        timestamps: true,
    });

    const Booking = mongoose.model("bookings", bookingSchema);

    module.exports = Booking;