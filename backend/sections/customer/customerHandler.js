const CustomerModel = require("./customerModel");

// returns all customers from database
// ? maybe sorting option
const GetCustomers = async (req, res) => {
    try {
        const customers = await CustomerModel.find({}); //.sort({createdAt: -1});
        res.status(200).json(customers);
        console.log(customers.length, "Customers fetched successfully.");
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
//  inserts a customer to database and returns
const InsertCustomer = async (req, res) => {
    try {
        const customer = await CustomerModel.create(req.body);
        console.log("Customer succesfully insterted:", customer);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// returns a customer from database by id
const GetCustomerById = async (req, res) => {
    try {
        const customer = await CustomerModel.findById(req.params.id);
        res.status(200).json(customer);
        console.log("Customer succesfully fetched:", customer);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// deletes a customer from database by id and returns
const DeleteCustomerById = async (req, res) => {
    try {
        const customer = await CustomerModel.findByIdAndDelete(req.params.id);
        res.status(200).json(customer);
        console.log("Customer succesfully deleted:", customer);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
// updates a customer from database by id and returns
const UpdateCustomerById = async (req, res) => {
    try {
        // ! doesn't return updated vendor so i'm fetching again
        const customer = await CustomerModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        const updatedCustomer = await CustomerModel.findById(req.params.id);
        res.status(200).json(updatedCustomer);
        console.log("Vendor succesfully updated:", updatedCustomer);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error.message);
    }
};
module.exports = {
    GetCustomers,
    InsertCustomer,
    GetCustomerById,
    DeleteCustomerById,
    UpdateCustomerById,
};
