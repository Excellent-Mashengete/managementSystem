const client = require("../Config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const randomize = require("rand-token")
const SECRET_KEY = randomize.generate(20) //generate random token of up to 20 digits 
const nodeMailer = require('nodemailer')//Send emails

//Register a new user in the database 
const register = async (req, res) => {
    const { fname,lname, email, password } = req.body;
    try { 
        const data = await client.query(`SELECT * FROM Administrator WHERE email= $1;` , [email]);
        const arr = data.rows;
        if(arr.length != 0){
            return res.status(400).json({
                message: "user already exist"
            })
        }else { 
            bcrypt.hash(password, 10, (err, hash) => {
                if(err) 
                    return res.status(err).json({
                        message: "Sever Error",
                    });
                const user = {
                    fname, 
                    lname,
                    email,
                    password: hash,
                };
                var flag = 1;

                client.query(`INSERT INTO Administrator (fname, lname, email,  password) VALUES ($1,$2,$3, $4);`, 
                [user.fname,user.lname, user.email, user.password], (err) => {
                    if (err) {
                        flag  =  0;                          //If user is not inserted is not inserted to database assigning flag as 0/false.
                        return  res.status(500).json({
                            message: "Database error"
                        })
                    }else {
                        flag  =  1;
                    }
                })
                if (flag) {
                    const  token  = jwt.sign({
                        email: user.email,
                        fname: user.fname,
                        lname: user.lname
                    },
                        SECRET_KEY
                    );
                    return res.status(200).send({ message: 'User added to database, not verified' ,token:token});
                };
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            message: "Database error while registering user!",
        });
    }
} 

//Create a login 
const login = async (req, res) => {
    const {email,password} = req.body;
    try{
        const data = await client.query(`SELECT * FROM Administrator WHERE email= $1;` , [email]);
        const arr = data.rows;
        if(arr.length != 0){
            return res.status(400).json({
                message: "user already exist"
            })
        }
        if(!(email && password)){
            return res.status(400).json({message:"user input required"});
        }

        const logData = await client.query(`SELECT * FROM Administrator WHERE email= $1;`,
        [email]); //Check if user exist
        arrData = logData.rows;

        if (arrData.length == 0) {
            return res.status(400).json({
                message: "user doesn't exist"
            })
        }else{
            bcrypt.compare(password, arrData[0].password, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        message: "Server error"
                    })
                } else 
                    if (results === true) {
                    const token = jwt.sign({
                            email: email, 
                            id:arrData[0].id, 
                            fname:arrData[0].fname,
                            lname:arrData[0].lname
                        },
                            SECRET_KEY,
                        { expiresIn: '1h' }
                    );
                    
                    return res.status(200).json({
                        message: "User successfully signed in",
                        token:token,
                    });
                } else {
                    //define errors
                    if (results != true) {
                        return res.status(400).json({
                            message: "incorrect password"
                        })
                    }
                }
            })
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Database error while logging in!"
        })
    }
}

//Create a login 
const forgotPassword = async (req, res) => {
    const {email} = req.body;
    try{
        if(!(email)){
            return res.status(400).json({message:"user input required"});
        }
        const data = await client.query(`SELECT * FROM Administrator WHERE email= $1;` , [email]);
        const arr = data.rows;
        if(arr.length == 0){
            return res.status(400).json({
                message: "user doesn't exist"
            })
        }

        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: 'nsfastracking@gmail.com',
                pass: 'Tracking#1',
                accessToken: SECRET_KEY,
            }
        });

        
        let mailOptions = {
            from: 'nsfastracking@gmail.com', // sender address
            to: email, // recipient
            subject: 'Resert Account password link', // Subject line
            //Email Body
            html:
            `<b>Greetings ,<br></br>

                kind Regards,<br></br>
                HR System
            <b>`
        };
    
        transporter.sendMail(mailOptions, (error, results) => {
            if(error){
                console.log(error)
                return res.status(400).json({
                    // message: "email failed to send"
                    error: error
                })
            }
            return res.status(200).json({
                message: 'Email has been sent, with your login credentials'
            }, results ) //Return a status 200 if there is no error
        })
    }
    catch (error) {
        res.status(500).json({
            error: "Database error while logging in!"
        })
    }
}

//Create function to get all userprofiles
const userProfile = async (req, res, next) => {
    try{  
        await client.query(`SELECT * FROM Administrator`, (error, results) => {
            if(error){ 
                return next(error)
            }
            return res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}

module.exports ={
    register,
    login,
    forgotPassword,
    userProfile,
    SECRET_KEY
}