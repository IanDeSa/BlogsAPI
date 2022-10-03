const express = require('express');
const middlewares = require('../middlewares');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.post('/', middlewares.userMiddleware, middlewares.authMiddleware, controller.addUser);
router.get('/', middlewares.authMiddleware, controller.getAll);

module.exports = router;