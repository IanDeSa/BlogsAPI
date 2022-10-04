const express = require('express');
const controller = require('../controllers/post.controller');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.authMiddleware, controller.createPost);

module.exports = router;