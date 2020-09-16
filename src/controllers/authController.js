const db = require('../models/models');
const authController = {};

authController.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body);
        // console.log('cookies', req.cookies)

        if (!email || !password) {
          return next(
            "missing username or password in userController.verifyUser"
          );
        }

        let findEmail = [email];
        const findUser = `SELECT password, _id FROM users WHERE email=$1`;
        const data = await db.query(findUser, findEmail);

        if (!email || !data.rows.length) {
          return res.redirect("/login");
        //   return res.status(400).json("No user email found in database", err);
        }

        if(password === data.rows[0].password){
            return next();
        }
    } catch(err) {
        next({
            log: 'auntController.loginUser express error handler caught unknown middleware error',
            status: 400,
            message: { err: "An error occurred" }
        });
    }
};

authController.setCookie = (req, res, next) => {
    let randomNumber = Math.floor(Math.random() * 100000000);

    //600000 is 10 minutes
    res.cookie("token", randomNumber, { httpOnly: true, maxAge: 600000 });
    console.log(res.cookie);
    return next();
};

authController.isLoggedIn = (req, res, next) => {
    const { token } = request.cookies;
    console.log(token);

    if(!req.cookies){
        res.redirect('/login');
    }
    return next();
};



module.exports = authController;