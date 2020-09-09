const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParse = require("body-parser"); // <-- needed because I have an older version of express

const app = express();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

// app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(cors());
app.use(express.json()); // --> Same as body parser
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});


//catch all router handlers
app.use((req, res) => {
    console.log("catch-all route handler is working");
});

app.use((err, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
});

//server is listening
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));