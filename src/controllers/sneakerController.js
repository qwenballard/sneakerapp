const e = require("express");
const db = require("../models/models");
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
  } catch (err) {}
};

module.exports = sneakerController;