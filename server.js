require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { PORT = 4000, MONGODB_URL } = process.env;
const app = express();
const peopleRoutes = require("./routes/people");
const eventsRoutes = require("./routes/events");
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/people", peopleRoutes);
app.use("/api/events", eventsRoutes);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));