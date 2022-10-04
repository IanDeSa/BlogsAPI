const express = require('express');
const middlewares = require('../middlewares');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/', middlewares.authMiddleware, controller.getAll);
router.get('/:id', middlewares.authMiddleware, controller.getByPk);
router.post('/', middlewares.userMiddleware, controller.addUser);

module.exports = router;