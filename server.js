// require in modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Mongoose:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
});

app.use(require("./routes/index"));
app.use(require("./routes/static-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
