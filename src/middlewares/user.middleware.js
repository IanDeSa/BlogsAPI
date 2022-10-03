const userSchema = require('../validations/joi.schemas.js/user.schema');

const user = (req, _res, next) => {
  const { error } = userSchema.validade(req.body);

  if (error) {
    const e = new Error(error.message);
    e.status = error.status;
    throw e;
  }

  next();
};

module.exports = user;