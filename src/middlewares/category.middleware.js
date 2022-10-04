const categorySchema = require('../validations/joi.schemas.js/category.schema');

const category = (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    const e = new Error(error.message);
    e.status = 400;
    throw e;
  }

  next();
};

module.exports = category;