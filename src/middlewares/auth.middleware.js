const { tokenValidation } = require('../utils/JWT');

const authMiddleware = async (req, _res, next) => {
  const token = req.headers.authorization;
  const payload = await tokenValidation(token);

  if (!payload) {
    const e = new Error('Error heading jwt token validation');
    e.status = 401;
    throw e;
  }

  next();
};

module.exports = authMiddleware;