const { User } = require('../models');
const tokenGenerator = require('../utils/JWT');
const validation = require('../validations/auth.validation');

const auth = async ({ email, password }) => {
  validation.validationEmailAndPassword({ email, password });
  const user = await User.findOne({
    attributes: ['id', 'display_name', 'email', 'image'],
    where: { email, password },
  });

  validation.validationUserExists(user);

  const token = tokenGenerator(user.dataValues);

  return token;
};

module.exports = {
  auth,
};
