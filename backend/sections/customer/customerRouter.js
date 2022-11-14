const router = require("express").Router();
const customerHandler = require("./customerHandler");

router.get("/", customerHandler.GetCustomers);
router.post("/", customerHandler.InsertCustomer);
router.get("/:id", customerHandler.GetCustomerById);
router.delete("/:id", customerHandler.DeleteCustomerById);
router.patch("/:id", customerHandler.UpdateCustomerById);

module.exports = router;
