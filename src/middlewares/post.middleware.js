const postSchema = require('../validations/joi.schemas.js/post.schema');

const user = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }

  next();
};

module.exports = user;