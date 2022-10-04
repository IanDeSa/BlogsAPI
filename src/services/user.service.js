const { User } = require('../models');
const JWT = require('../utils/JWT');
const { validationUserCreated } = require('../validations/user.validation');

const addUser = async ({ displayName, email, password, image = '' }) => {
  const user = await User.findOne({
    where: { email },
  });

  validationUserCreated(user);

  const newUser = await User.create({ displayName, email, password, image });

  const token = JWT.tokenGenerator(newUser.dataValues);
  return token;
};

const getAll = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getByPk = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = {
  addUser,
  getAll,
  getByPk,
};