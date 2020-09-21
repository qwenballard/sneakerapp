const e = require('express');
const db = require('../models/models');
const authController = {};

authController.loginUser = async (req, res, next) => {
    console.log('login user controller');
    try {
        const { email, password } = req.body;

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
            const foundUser = data.rows[0];
            res.locals.user = foundUser;
            return next();
        } else {
          return res.status(403).json('unsuccessful login attempt');
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
  const { user } = res.locals;
  // console.log(user);
  // console.log(user._id);

  //600000 is 10 minutes
  res.cookie("token", user._id, { httpOnly: true, maxAge: 600000 });
  return next();
};

authController.isLoggedIn = async (req, res, next) => {
    try {

      const { token } = req.cookies;

      if (!token) {
        return next();
      } else {
        let useToken = [token];
        const findUser = `SELECT email, favorite_shoe, first_name, last_name, gender, username FROM users WHERE _id=$1`;
        const data = await db.query(findUser, useToken);

        const foundUser = data.rows[0];
        res.locals.user = foundUser;
        return res.status(200).json(res.locals.user);
      }
    } catch(err){
       next({
            log: 'auntController.isLoggedIn express error handler caught unknown middleware error',
            status: 400,
            message: { err: "An error occurred" }
        });
    }
};



module.exports = authController;