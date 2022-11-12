const mongoose = require("mongoose");

const VendorModel = new mongoose.Schema(
    {
        salution: String,
        firstName: String,
        lastName: String,
        companyName: String,
        displayName: String,
        email: String,
        workPhone: String,
        mobilePhone: String,
        website: String,
    },
    { timestamps: true }
);
module.exports = mongoose.model("VendorModel", VendorModel);
