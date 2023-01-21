const passport = require("passport");


const registerPost = (req, res, next) => {
    try {
        // AUTENTICACIÓN
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(201).json(user);
        };

        passport.authenticate("registrito", done)(req);

    } catch (error) {
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        const done = (error, user) => {
        if(error) return next(error);
        return res.status(201).json(user);
        };

        passport.authenticate("super-login", done)(req);
        
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    registerPost,
    loginPost,
}