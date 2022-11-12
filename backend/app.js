// imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const vendorRouter = require("./sections/vendor/vendorRouter");

// app initialization
const app = express();
app.use(cors());
app.use(express.json());

// endpoints
app.use("/vendors", vendorRouter);

// run sever
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.BACKEND_PORT, () => {
            console.info("Server running on:", process.env.BACKEND_PORT);
        });
    })
    .catch((err) => {
        console.error(err);
    });
