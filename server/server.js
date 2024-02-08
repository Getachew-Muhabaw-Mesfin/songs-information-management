const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");

// load config
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();






const PORT = process.env.PORT || 500;
app.listen(PORT, console.log(`Server Running in Port : ${PORT}`));
