// const e = require("express");
const db = require("../models/models");
const fetch = require("node-fetch");

const sneakerController = {};

sneakerController.retrieveWishlist = async (req, res, next) => {
  try {
    console.log("sneaker controller");
    const { token } = req.cookies;

const userId = [req.cookies.token];
const getUserWishlist = `SELECT sneaker_id, brand, colorway, wishlist.gender, name, release_date, release_price, title, year, image_url 
FROM wishlist
WHERE wishlist.user_id =${userId};`;

const data = await db.query(getUserWishlist);
res.locals.wishlist = data.rows;
console.log(data.rows);
return res.status(200).json(res.locals.wishlist);
  } catch (err) {
    next({
      log:
        "sneakerController.retrieveWishlist express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    });
  }
};

sneakerController.addSneaker = async (req, res, next) => {
    try {

      const { token } = req.cookies;
      const { sneakerId } = req.body;

      if(!token){
        return res.json('Please login first');
      }

      let results = await fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers/${sneakerId}`
      );
      let data = await results.json();
      let shoe = data.results[0];

      let addNewSneaker = [
        Number(token),
        shoe.id,
        shoe.brand,
        shoe.colorway,
        shoe.gender,
        shoe.name,
        shoe.releaseDate,
        shoe.retailPrice,
        shoe.shoe,
        shoe.styleId,
        shoe.title,
        shoe.year,
        shoe.media.imageUrl,
        shoe.media.smallImageUrl,
        shoe.media.thumbUrl,
      ];


      const addSneaker = `
        INSERT INTO wishlist
        (user_id, sneaker_id, brand, colorway, gender, name, release_date, release_price, shoe_name, style_id, title, year, image_url, small_imageurl, thumb_url)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        RETURNING name;
        `;

      await db.query(addSneaker, addNewSneaker).then(data => console.log(data.rows));

      return next();
    } catch (err) {
      next({
        log:
          "sneakerController.addSneaker express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occurred" },
      });
    }
};

sneakerController.deleteSneaker = (req, res, next) => {
    const { token } = req.cookies;
    const { sneakerId } = req.params;

    if (!token) {
      return res.json("Please login first");
    }

    console.log("token", token);
    console.log('sneaker id', sneakerId);

    const deleteSneaker = `DELETE FROM wishlist
    WHERE sneaker_id = '${sneakerId}'
    AND user_id = ${Number(token)};`;

    db.query(deleteSneaker).then((data) => console.log(data.rows));

    return next();
};

module.exports = sneakerController;