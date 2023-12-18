const employeeController = require("../controllers/employeeController");
const express = require("express");
const router = express.Router();


router.post("/employee",employeeController.createEmployee);

router.get("/employee",employeeController.allEmployees)
module.exports = router;