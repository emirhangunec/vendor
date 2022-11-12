// imports
const router = require("express").Router();
const vendorHandler = require("./vendorHandler");

router.get("/", vendorHandler.GetVendors);
router.post("/", vendorHandler.InsertVendor);
router.get("/:id", vendorHandler.GetVendorById);
router.delete("/:id", vendorHandler.DeleteVendorById);
router.patch("/:id", vendorHandler.UpdateVendorById);

// exports
module.exports = router;
