const express = require('express');
const controller = require('../controllers/post.controller');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.postMiddleware, middlewares.authMiddleware, controller.addPost);
router.get('/', middlewares.authMiddleware, controller.getAll);
router.get('/:id', middlewares.authMiddleware, controller.getByPk);

module.exports = router;