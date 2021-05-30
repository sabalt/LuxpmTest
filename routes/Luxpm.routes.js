var luxpm = require("../controllers/Luxpm.controller");
//const { check, validationResult } = require('express-validator');

//var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/", luxpm.home);
};