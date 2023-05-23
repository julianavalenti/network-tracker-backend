require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const { PORT = 4000, MONGODB_URL } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const peopleRoutes = require('./routes/people');
const eventsRoutes = require('./routes/events');
app.use('/people', peopleRoutes);
app.use('/events', eventsRoutes);

// Database connection
mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.get("/", (req, res) => {
  res.send("hello")
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
