const express = require('express');
const middlewares = require('../middlewares');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.post('/', middlewares.authMiddleware, controller.addUser);

module.exports = router;