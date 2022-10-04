const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().min(1).required(),
});

module.exports = categorySchema;