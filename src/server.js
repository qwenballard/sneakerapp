const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // <-- needed because I have an older version of express

const app = express();
const PORT = 3000;
const cors = require("cors");

const authController = require('./controllers/authController');

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

app.get('/login', authController.isLoggedIn);

app.post("/login", authController.loginUser, authController.setCookie, (req, res) => {
    //redirect you back to the home page with your login name showing
    res.redirect("/");
});

// app.post("/wishlist", authController.isLoggedIn, (req, res) => {
//   //hits middlewear routes to display sneakers back on the home page???
// });


/*Routes need to be added

/login/sign Up

/home

/profile/wishlist
/profile/setting

/search

*/

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