const postSchema = require('../validations/joi.schemas.js/post.schema');

const user = (req, _res, next) => {
  const { error } = postSchema.postSchema.validate(req.body);

  if (error) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }

  next();
};

const updated = (req, _res, next) => {
  const { error } = postSchema.UpdatedSchema.validate(req.body);

  if (error) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }

  next();
};

module.exports = {
  user,
  updated,
};