const mongoose = require("mongoose");

const CustomerModel = new mongoose.Schema(
    {
        customerType: String,
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
module.exports = mongoose.model("CustomerModel", CustomerModel);
