const client = require("../Config/db.config");

//Retrieve all employees
module.exports.employees = async (req, res) => {
    try {
        client.query(`
            SELECT emp_id, first_name, last_name, email, phone_number, hiredate, salary, status, a.dept_id, a.dept_name
            FROM Employees e
            INNER JOIN Department a ON e.dept_id = a.dept_id ORDER BY e.first_name ASC`, (error, results) =>{ //returns all employess list in the database from Employees and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

//Retrieve employee by ID
module.exports.employeesById = async (req,res) => {
    const id = parseInt(req.params.emp_id)
    try {
        client.query(`
        SELECT * FROM Employees WHERE emp_id = $1`,
        [id], (error, results) =>{ //returns all employess list in the database from Employees and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

//Retrieve old employees from Oldemployee table
module.exports.oldEmployees = async (req, res) => {
    try {
        client.query(`
        SELECT emp_id, first_name, last_name, email, phone_number, hiredate,
        enddate, 
        DATE_PART('year', enddate::date)-DATE_PART('year', hiredate::date) as years,
        (DATE_PART('year', enddate::date) - DATE_PART('year', hiredate::date)) * 12 +
        (DATE_PART('month', enddate::date) - DATE_PART('month', hiredate::date)) as months, status,
        a.dept_id, a.dept_name
        FROM oldemployees e 
        INNER JOIN Department a ON e.dept_id = a.dept_id ORDER BY e.first_name;`, (error, results) =>{ //returns all employess list in the database from Employees and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

//delete employee by ID 
module.exports.DeletebyId = async (req,res) => {
    const id = parseInt(req.params.emp_id)
    try {
        client.query(`DELETE FROM employees WHERE emp_id = $1`, [id], (error, results)=>{ //delete the user we got using their id
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    message: `Unable to delete employee number ${id}`
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}

//Move employee table to oldemployee by ID
module.exports.move_employee = async (req,res) => {
    const id = parseInt(req.params.emp_id)
    const {first_name, last_name, email, phone_number, hiredate, salary, dept_id, status} = req.body
    try {
        client.query(`    
            INSERT INTO oldemployees(emp_id, first_name, last_name, email, phone_number, hiredate, salary, dept_id, status)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
            [ id, first_name, last_name, email, phone_number, hiredate, salary, dept_id, status],
             (error, results)=>{ //delete the user we got using their id
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

//Move employee table to oldemployee by ID
module.exports.Add_New_Emp = async (req,res) => {
    const {first_name, last_name, email, phone_number, salary, dept_id, status} = req.body
    try {
        client.query(`    
            INSERT INTO employees(first_name, last_name, email, phone_number, salary, dept_id, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
            [first_name,last_name,email, phone_number, salary, dept_id, status], (error, results)=>{ //Add new employee
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    message: "Unable to add new employee to the database"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}

module.exports.UpdateUserInfor = async (req,res) => {
    const emp_id = parseInt(req.params.emp_id)
    const { phone_number, salary, dept_id} = req.body
    try {
        client.query(`
        UPDATE employees SET phone_number = $1, salary = $2, dept_id= $3  WHERE emp_id=$4`, 
            [phone_number, salary, dept_id, emp_id], (error, results)=>{ //Add new employee
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    message: "Unable to update employee details"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}