const client = require("../Config/db.config");

//Retrieve all department by category
module.exports.department = async (req,res) => {
    const id = parseInt(req.params.dept_id); 
    try {
        client.query(`SELECT COUNT(a.dept_id) as total, a.dept_name
            FROM department a
            INNER JOIN employees e on a.dept_id = e.dept_id
            WHERE a.dept_id = $1
            GROUP BY (a.dept_name)`,[id], (error, results) =>{ //returns all employess list in the database from Employees and ascending order
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