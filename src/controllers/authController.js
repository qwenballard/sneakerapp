const db = require('../models/models');
const authController = {};

authController.verifyUser = (req, res, next) => {
    const { user, pass } = req.body;
    console.log(req.body);


    
};

authController.setCookie = (req, res, next) => {
    let randomNumber = Math.floor(Math.random * 100000000);

    //600000 is 10 minutes
    res.cookie("token", randomNumber, { httpOnly: true, maxAge: 600000 });
    console.log(res.cookie);
    return next();
};

authController.isLoggedIn = (req, res, next) => {
    const { token } = request.cookies;
    console.log(token);

    // if(!req.cookies){
    //     //then do something here...
    // }
};



export default authController;