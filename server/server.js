const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const songRoutes = require("./routes/songRoutes");
const songsStatisticRoutes = require("./routes/songsStatisticRoutes");

// load config
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/v1/songs", songRoutes);
app.use("/api/v1", songsStatisticRoutes);

// Start the server
const HOST = process.env.HOST;
const PORT = process.env.PORT;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
