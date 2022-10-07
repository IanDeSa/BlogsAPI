const express = require('express');
const controller = require('../controllers/post.controller');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.postMiddleware.user, middlewares.authMiddleware, controller.addPost);
router.get('/', middlewares.authMiddleware, controller.getAll);
router.get('/:id', middlewares.authMiddleware, controller.getByPk);
router
.put('/:id', middlewares.authMiddleware, middlewares.postMiddleware.updated, controller.updated);

module.exports = router;