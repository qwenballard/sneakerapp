const db = require('./src/models/models');

const queries = {};

console.log('test')
//=======================================================================================================
//Create User
queries.addUser = `
INSERT INTO users (username, email, first_name, last_name, password, favorite_shoe, gender)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING username
`;

//test data
// INSERT INTO users(username, email, first_name, last_name, password, favorite_shoe, gender)
// VALUES('mqb0021', 'qwen.ballard@gmail.com', 'Qwen', 'Ballard', 'test', 'Air Jordan "True Blue" 3''s', 'men')

// const addUser = async () => {
  // let addQwen = ['mqb0021', 'qwen.ballard@gmail.com', 'Qwen', 'Ballard', 'test', 'Air Jordan "True Blue" 3s', 'men'];
  // await db.query(queries.addUser, addQwen).then(data => console.log(data.rows));
// }
// addUser();

// let addQwen = ['mqb0021', 'qwen.ballard@gmail.com', 'Qwen', 'Ballard', 'test', 'Air Jordan "True Blue" 3s', 'men'];
// await db.query(queries.addUser, addQwen).then(data => console.log(data.rows));

// let addMeron = ['mahabtem', 'meron@gmail.com', 'Meron', 'Habtemariam', 'test', 'Black Classic Vans', 'women'];
// await db.query(queries.addUser, addMeron).then(data => console.log(data.rows));

//=======================================================================================================
//Create/add to Sneaker Wishlist
queries.addSneaker = `
INSERT INTO wishlist
  (user_id, sneaker_id, brand, colorway, gender, name, release_date, release_price, shoe_name, style_id, title, year, image_url, small_imageurl, thumb_url)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
RETURNING name
;
`;

//test data - sneaker one
// INSERT INTO wishlist(user_id, sneaker_id, brand, colorway, gender, name, release_date, release_price, shoe_name, style_id, title, year, image_url, small_imageurl, thumb_url)
// VALUES(1, 'b80ff5b5-98ab-40ff-a58c-83f6962fe8aa', 'Nike', 'White/White', 'men', 'White ''07', '', 90, 'Nike Air Force 1 Low', '315122-111', 'Nike Air Force 1 Low White ''07', 0,
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052'
// )

// const addSneaker = async () => {
//   let addSneakerOne = [2, 'b80ff5b5-98ab-40ff-a58c-83f6962fe8aa', 'Nike', 'White/White', 'men', 'White 07', '', 90, 'Nike Air Force 1 Low', '315122-111', 'Nike Air Force 1 Low White 07', 0,
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052'
//   ];
//   await db.query(queries.addSneaker, addSneakerOne).then(data => console.log(data.rows));
// }
// addSneaker();

// let addSneakerOne = [1, 'b80ff5b5-98ab-40ff-a58c-83f6962fe8aa', 'Nike', 'White/White', 'men', 'White ''07', '', 90, 'Nike Air Force 1 Low', '315122-111', 'Nike Air Force 1 Low White ''07', 0,
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052',
//     'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052'
// ];
// await db.query(queries.addSneaker, addSneakerOne).then(data => console.log(data.rows));

//test data - sneaker two
// INSERT INTO wishlist (user_id, sneaker_id, brand, colorway, gender, name, release_date, release_price, shoe_name, style_id, title, year, image_url, small_imageurl, thumb_url)
// VALUES(1, 'd3c7f86c-050c-4607-95f7-15dc4efd32ec', 'Nike', 'Black/Black', 'men', 'Black', '2018-12-15 23:59:59', 395, 'Nike Air Fear Of God 1', 'AR4237-001', 'Nike Air Fear Of God 1 Black', 2018,
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859',
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859',
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859'
// )




// let addSneakerTwo = [1, 'd3c7f86c-050c-4607-95f7-15dc4efd32ec', 'Nike', 'Black/Black', 'men', 'Black', '2018-12-15 23:59:59', 395, 'Nike Air Fear Of God 1', 'AR4237-001', 'Nike Air Fear Of God 1 Black', 2018,
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859',
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859',
// 'https://stockx.imgix.net/Nike-Air-Fear-Of-God-1-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544563859'
// ];
// db.query(queries.addSneaker, addSneakerTwo).then(data => console.log(data.rows));


//=======================================================================================================
// Get User Wishlist
queries.getUserWishlist = `SELECT * FROM wishlist
LEFT JOIN users
ON wishlist.user_id = users._id
;
`;

//=======================================================================================================
//Delete sneaker for a specific user
// const deleteSneaker = `DELETE FROM wishlist
//     WHERE sneaker_id = '2be6bea7-77a2-414c-b213-ac4d0585f278'
//     AND user_id = 2;`;

// db.query(deleteSneaker).then((data) => console.log(data.rows));


module.exports = queries;