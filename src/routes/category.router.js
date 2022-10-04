const express = require('express');
const controller = require('../controllers/category.controller');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/', middlewares.authMiddleware, controller.getAll);
router
.post('/', middlewares.categoryMiddleware, middlewares.authMiddleware, controller.addCategory);

module.exports = router;