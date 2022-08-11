const express = require('express'); // import express library
const cors = require('cors'); //import cors module
const app = express(); //Initialize express
const bodyParser = require('body-parser');
require('./App/Config/dotenv.config')
var corsOptions = {
  origin: ["https://employeesystem.netlify.app", "http://localhost:4200"],
  credentials: true
};// only allow that listerning address to connnect to the database


app.use(express.json());  // to support JSON-encoded
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
//call our backend connections file
const client = require('./App/Config/db.config')
client.connect((err) =>{ // Connect to the Database
    if (err) {
       console.log(err) //Return an error if unable to connnect to the database
      }
   else {
     console.log("Databased Connected"); //Database connection Successfuly
    }
});

//call our routes
const auth = require("./App/Routes/authenticate");
const emp = require("./App/Routes/employee");

const port = process.env.PORT || 7070;

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Excellent server");
});

app.use("/api", auth) //retrive authentication infor 
app.use("/api", emp) //retrive employees information 
app.listen(port, () =>{  
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
 })