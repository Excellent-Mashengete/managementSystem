const { Client } = require("pg");
const client = require("../Config/db.config");

module.exports.employees = async (req, res) => {
    try {
        client.query(`
        SELECT * FROM Employees ORDER BY first_name ASC`, (error, results) =>{ //returns all employess list in the database from Employees and ascending order
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


module.exports.DeletebyId = async (req,res) => {
    const id = parseInt(req.params.emp_id)
    try {
        Client.query(`    
            WITH foo AS (DELETE FROM employees WHERE emp_id = 1)
            INSERT INTO oldemployees(emp_id, first_name, last_name, email, phone_number, hiredate, salary)
            (SELECT emp_id, first_name, last_name, email, phone_number, hiredate, salary
            FROM employees
            WHERE emp_id = $1)`, [id], (error, results)=>{ //delete the user we got using their id
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

module.exports.oldEmployees = async (req, res) => {
    try {
        client.query(`
        SELECT * FROM oldemployees ORDER BY first_name ASC`, (error, results) =>{ //returns all employess list in the database from Employees and ascending order
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