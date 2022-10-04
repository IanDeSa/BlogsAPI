const userSchema = require('../validations/joi.schemas.js/user.schema');

const user = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    const e = new Error(error.message);
    e.status = 400;
    throw e;
  }

  next();
};

module.exports = user;