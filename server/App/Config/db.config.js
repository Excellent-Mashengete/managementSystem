const data ={
    HOST:'ec2-50-19-255-190.compute-1.amazonaws.com',
    USER:'hhjbosyvazwbxu',
    DB:'dbn931b1c3oaof',
    PASS:'b85119838f6344bf2bcfd84de00bdee896a0eda7724ae182552aaaca997b22e1',
    PORT:'5432',
    DIALECT:'postgres',
}
const local ={
    HOST:'localhost',
    USER:'admin',
    DB:'userman',
    PASS:'admin12345',
    PORT:'5432',
    DIALECT:'postgres'
}
const database = ({
    connectionString:local,
    ssl:{
        rejectUnauthorized: false //allows external access to database when using nodejs
    }
})

module.exports = database