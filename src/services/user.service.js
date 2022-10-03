const { User } = require('../models');
const JWT = require('../utils/JWT');
const validation = require('../validations/user.validation');

const addUser = async ({ displayName, email, password, image = '' }) => {
  const user = await User.findOne({
    where: { email },
  });

  validation.validationUserCreated(user);

  const newUser = await User.create({ displayName, email, password, image });

  const token = JWT.tokenGenerator(newUser.dataValues);
  return token;
};

module.exports = {
  addUser,
};