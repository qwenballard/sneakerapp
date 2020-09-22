const e = require("express");
const db = require("../models/models");
const sneakerController = {};

sneakerController.retrieveWishlist = async (req, res, next) => {
  try {
    console.log("sneaker controller");
    const { token } = req.cookies;

const userId = [req.cookies.token];
//redo
const getUserWishlist = `SELECT sneaker_id, brand, colorway, wishlist.gender, name, release_date, release_price, title, year, image_url 
FROM wishlist
LEFT JOIN users
ON wishlist.user_id = $1;`;

const data = await db.query(getUserWishlist, userId);
res.locals.wishlist = data.rows;
console.log(data.rows);
return res.status(200).json(res.locals.wishlist);
  } catch (err) {}
};

module.exports = sneakerController;