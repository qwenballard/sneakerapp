const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // <-- needed because I have an older version of express

const app = express();
const PORT = 3000;
const cors = require("cors");

const authController = require('./controllers/authController');
const sneakerController = require('./controllers/sneakerController');

// app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(cors());
app.use(express.json()); // --> Same as body parser
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/assets")));


//logged in method needs to be written
app.get("/", (req, res) => {
  //won't let you do anything if you aren't logged in
  res.sendFile(path.resolve(__dirname, "../client/index.html"),);
});

//App.js is triggering this route and sending back user data if logged in and showing hidden pages
app.get('/login', authController.isLoggedIn);

app.post("/login", authController.loginUser, authController.setCookie, (req, res) => {
    res.redirect("/");
});

app.post("/signup", authController.createUser, authController.setCookie, (req, res) => {
  res.redirect('/');
});

app.get('/profile/wishlist', sneakerController.retrieveWishlist);


// HANDLING UNKNOWN URLS
app.use('*', (req, res) => {
  res.status(404).send('URL path not found');
});

//catch all router handlers
app.use((req, res) => {
    console.log("catch-all route handler is working");
});

// app.use((err, req, res, next) => {
//     const defaultErr = {
//         log: "Express error handler caught unknown middleware error",
//         status: 400,
//         message: { err: "An error occurred" },
//     };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     res.status(errorObj.status).json(errorObj.message);
// });

//server is listening
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));