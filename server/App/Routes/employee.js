const express = require("express");
const router = express.Router();

const employess = require("../Controllers/employees");
const dept = require("../Controllers/department");

router.get('/emplist',employess.employees);
router.get('/empbyid/:emp_id',employess.employeesById);
router.get('/oldemplist', employess.oldEmployees)
router.delete('/delete/:emp_id', employess.DeletebyId)
router.post('/add_old_emp/:emp_id', employess.move_employee)
router.post('/add_new', employess.Add_New_Emp)
router.get('/deptname/:dept_id',dept.department);

module.exports = router;