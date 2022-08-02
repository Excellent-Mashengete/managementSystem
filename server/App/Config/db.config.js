const {Client} = require("pg");
// const local ={
//     HOST:'localhost',
//     USER:'admin',
//     DB:'userman',
//     PASS:'admin12345',
//     PORT:'5432',
//     DIALECT:'postgres'
// }
const client = new Client({
    connectionString: process.env.DB_CONNECTION,
    ssl:{
        rejectUnauthorized: false //allows external access to database when using nodejs
    }
});

module.exports = client