const {Client} = require("pg");
const data = "postgres://yycfmlgwvzmcvw:dad24ed1b7b32fb371c87b147e5dba4c57964d8ad85b93b62973ac7a5912ab50@ec2-3-223-169-166.compute-1.amazonaws.com:5432/damk6km0vhb4i2"
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