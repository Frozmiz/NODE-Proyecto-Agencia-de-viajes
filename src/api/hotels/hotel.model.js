const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema (
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },

        starts: {
            type: Number,
        },

        city: {
            type: String,
            
        },

        country: {
            type: String,
        },

        mail: {
            type: String,
            require: true,
            unique: true,
        },

    }, 
    {
        timestamps: true,
    });

    const Hotel = mongoose.model("hotels", hotelSchema);

    module.exports = Hotel;