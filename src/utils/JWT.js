const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtConfig = require('./JWT.config');

const tokenGenerator = (payload) => jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);

const tokenValidation = async (token) => {
  if (!token) {
    const e = new Error('Token not found');
    e.status = 401;
    throw e;
  }

  try {
    const introspection = await jwt.verify(token, process.env.JWT_SECRET);
    return introspection;
  } catch (e) {
    const err = new Error('Expired or invalid token');
    err.status = 401;
    throw err;
  }
};

module.exports = {
  tokenGenerator,
  tokenValidation,
};
