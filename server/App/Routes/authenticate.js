const express = require("express");
const router = express.Router();

const auth = require("../Controllers/authenticate.controllers");
const middleware = require("../Middlewares/userauthentication");

router.post('/register',auth.register);
router.post('/login',auth.login);
router.get('/profile',middleware, auth.userProfile);

module.exports = router;
