const {Client} = require("pg");
const data = "postgres://ujbzvpmbhcdows:57c40dda6a9d024934a31b06b6d520ad591b3156105142f9c79c586160629e83@ec2-44-206-197-71.compute-1.amazonaws.com:5432/dbcgj064muqpcp"
// const local ={
//     HOST:'localhost',
//     USER:'admin',
//     DB:'userman',
//     PASS:'admin12345',
//     PORT:'5432',
//     DIALECT:'postgres'
// }

const client = new Client({
    connectionString: data,
    ssl:{
        rejectUnauthorized: false //allows external access to database when using nodejs
    }
});


module.exports = client