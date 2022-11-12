// imports
const VendorModel = require("./vendorModel");

// returns all vendors from database
// ? maybe sorting option
const GetVendors = async (req, res) => {
    try {
        const vendors = await VendorModel.find({}); //.sort({createdAt: -1});
        res.status(200).json(vendors);
        console.log(vendors.length, "Vendors fetched successfully.");
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
//  inserts a vendor to database and returns
const InsertVendor = async (req, res) => {
    try {
        const vendor = await VendorModel.create(req.body);
        console.log("Vendor succesfully insterted:", vendor);
        res.status(200).json(vendor);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// returns a vendor from database by id
const GetVendorById = async (req, res) => {
    try {
        const vendor = await VendorModel.findById(req.params.id);
        res.status(200).json(vendor);
        console.log("Vendor succesfully fetched:", vendor);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// deletes a vendor from database by id and returns
const DeleteVendorById = async (req, res) => {
    try {
        const vendor = await VendorModel.findByIdAndDelete(req.params.id);
        res.status(200).json(vendor);
        console.log("Vendor succesfully deleted:", vendor);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// updates a vendor from database by id and returns
const UpdateVendorById = async (req, res) => {
    try {
        // ! doesn't return updated vendor so i'm fetching again
        const vendor = await VendorModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        const updatedVendor = await VendorModel.findById(req.params.id);
        res.status(200).json(updatedVendor);
        console.log("Vendor succesfully updated:", updatedVendor);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// exports
module.exports = {
    GetVendors,
    InsertVendor,
    GetVendorById,
    DeleteVendorById,
    UpdateVendorById,
};
