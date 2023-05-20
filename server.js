
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { PORT = 4000, MONGODB_URL } = process.env;
const app = express();
const peopleController = require('./controllers/people')



const people = require("./models/people")

const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

    

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(peopleController);

// app.use(express.urlencoded({extended:  true}));
app.get("/", (req, res) => {
    res.send("hello world");
});





  
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));