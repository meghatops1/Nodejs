const express = require('express');
const user = require("../controller/User");
const router = express.Router();

router.post('/register',user.Register);
router.post('/login',user.Login);

module.exports = router;