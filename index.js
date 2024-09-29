const express = require("express");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
const { default: mongoose } = require("mongoose");
const {authoriseUser} = require('./middleware/authoriseUser');  
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/", authRoutes);
app.use("/movies",authoriseUser,moviesRoutes);

mongoose.connect("mongodb://mongodb:27017/STEP").then(() => {
  console.log("Database Connected");

  app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
  });
});
