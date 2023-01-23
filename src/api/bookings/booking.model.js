const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema (
    {
        flight: {
            type: mongoose.Types.ObjectId,
            ref: "flights",
        },
        
        hotel: {
            type: mongoose.Types.ObjectId,
            ref: "hotels",
        },

        date: {
            type: String,
        },

        price: {
            type: Number,
        }
    

    }, 
    {
        timestamps: true,
    });

    const Booking = mongoose.model("bookings", bookingSchema);

    module.exports = Booking;