const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const tokenGenerator = (payload) => jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);

module.exports = tokenGenerator;
