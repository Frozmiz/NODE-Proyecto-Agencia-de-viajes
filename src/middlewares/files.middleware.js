// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const cloudinary = require("cloudinary").v2;

// const storage = multer.diskStorage({
//     filename: (req, file, done) => {
//         done(null, `${Date.now()}-${file.originalname}`);
//     },
//     destination: (req, file, done) => {
//         done(null, path.join(__dirname, "../../public/uploads"));
//     },
// });

// const VALID_FILE_TYPES = ["image/jpg", "image/png", "image/jpeg"];

// const fileFilter = (req, file, done) => {
//     console.log(file);
//     if (!VALID_FILE_TYPES.includes(file.mimetype)) {
//         done(new Error("Invalid file type"));
//     } else {
//         done(null, true);
//     }
// };

// const upload = multer({
//     storage,
//     fileFilter,
// });

// const uploadToCloudinary = async (req, res, next) => {
//     if (req.file) {
//         try {
//             const filePath = req.file.path;
//             const image = await cloudinary.uploader.upload(filePath);

//             // Borramos el archivo local
//             await fs.unlinkSync(filePath);

//             console.log('CLOUDINARY RESULT',image);

//             // Añadimos la propiedad file_url a nuestro Request
//             req.foto = image.secure_url;
//             req.batman = 'Bruce Wayne';
//             return next();
//         } catch (error) {
//             return next(error);
//         }
//     } else {
//         return next();
//     }
// };

// module.exports = {
//     upload,
//     uploadToCloudinary,
// };
