// imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//routers
const vendorRouter = require("./sections/vendor/vendorRouter");
const customerRouter = require("./sections/customer/customerRouter");
// app initialization
const app = express();
app.use(cors());
app.use(express.json());

// endpoints
app.use("/vendors", vendorRouter);
app.use("/customers", customerRouter);

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
