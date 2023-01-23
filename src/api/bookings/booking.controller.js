const Booking = require("./booking.model");

const indexGet = async (req, res, next) => {
    try {
        const allBookings = await Booking.find().populate({path: "flight", select: {_id:0}}).populate({path: "hotel", select: {_id:0}}); 
        //.populate > trae todos los campos del elemento de otra colección que queremos obtener.
        // Podemos poner tantos .populates como campos tengas.
        return res.status(200).json(allBookings);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const bookingToBeCreated = new Booking(req.body);

        const created = await bookingToBeCreated.save();

        return res.status(200).json(created);
    } catch (error) {
        return next(error);
    }
};


const editPut = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fields = {...req.body};
        const options = {new: true};

        const edited = await Booking.findByIdAndUpdate(id, fields, options);
        return res.status(200).json("Editado con éxito!");
    } catch (error) {
        res.status(error.status || 500).json(error.message);
    }
};

const deleteBooking = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Booking.deleteOne({ _id: id});
        if (deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con éxito");   
        } else {
            return res.status(200).json("No se encuentra el elemento a eliminar");   
        }          
    } catch (error) {
        res.status(error.status || 500).json(error.message);
    }
};

module.exports= {
    indexGet,
    createPost,
    editPut,
    deleteBooking,
};