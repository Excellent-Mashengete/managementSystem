const jwt = require("jsonwebtoken");
const random = require('../Controllers/authenticate.controllers')

module.exports = (req, res) => {
    try {
        const token = req.header("token");
        var decoded = jwt.verify(token, random.SECRET_KEY );
        res.status(200).json({decoded})
    } catch (error) {
        res.status(401).json({ message: "No token provided" });
    }
};

// const jwt_decode = require("jwt-decode");

// module.exports = (req, res) => {
//     var token = req.header("token");
//     try {
//         var decoded = jwt_decode(token);
//         res.status(200).json({decoded})

//     }catch(error){
//         res.status(401).json({ message: "No token provided" });
//     }

// };
