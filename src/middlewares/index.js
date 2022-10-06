const authMiddleware = require('./auth.middleware');
const errorMiddleware = require('./error.middleware');
const userMiddleware = require('./user.middleware');
const categoryMiddleware = require('./category.middleware');
const postMiddleware = require('./post.middleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  userMiddleware,
  categoryMiddleware,
  postMiddleware,
};