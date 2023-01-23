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
        },

        // image: {
        //     type: String,
        //     default:
        //         "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
        // },
    

    }, 
    {
        timestamps: true,
    });

    const Booking = mongoose.model("bookings", bookingSchema);

    module.exports = Booking;