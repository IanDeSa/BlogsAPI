const authMiddleware = require('./auth.middleware');
const errorMiddleware = require('./error.middleware');
const userMiddleware = require('./user.middleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  userMiddleware,
};