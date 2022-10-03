const { tokenValidation } = require('../utils/JWT');

const authMiddleware = async (req, _res, next) => {
  const token = req.headers.authorization;
  await tokenValidation(token);

  next();
};

module.exports = authMiddleware;