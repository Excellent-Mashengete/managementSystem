const express = require("express");
const router = express.Router();

const employess = require("../Controllers/employees");

router.get('/emplist',employess.employees);
router.get('/empbyid/:emp_id',employess.employeesById);

module.exports = router;