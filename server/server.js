const express = require('express'); // import express library
const cors = require('cors'); //import cors module
const app = express(); //Initialize express
const bodyParser = require('body-parser');
require('./App/Config/dotenv.config')
var corsOptions = {
  origin: "*.",
  credentials: true
};// only allow that listerning address to connnect to the database


const client = require ('./App/Models/export.model');
client.authenticate().then(()=> console.log("Database Connected")).catch(err => console.log('error ' + err))
 
app.use(express.json());  // to support JSON-encoded
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const port = process.env.PORT || 7070;


 app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Excellent server");
});

app.listen(port, () =>{  
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
 })