const express = require('express');
const controller = require('../controllers/auth.controller');

const authRoute = express.Router();

authRoute.post('/', controller.auth);

module.exports = authRoute;
