const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtConfig = require('./JWT.config');

const tokenGenerator = (payload) => jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);

const tokenValidation = async (token) => {
  if (!token) {
    const e = new Error('Missing auth token');
    e.status = 401;
    throw e;
  }

  try {
    const introspection = await jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    const err = new Error('Invalide auth token');
    err.status = 401;
    throw err;
  }
};

module.exports = {
  tokenGenerator,
  tokenValidation,
};
