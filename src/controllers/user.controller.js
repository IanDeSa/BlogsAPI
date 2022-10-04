const service = require('../services/user.service');

const addUser = async (req, res) => {
  const token = await service.addUser(req.body);
  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await service.getAll();
  return res.status(200).json(users);
};

const getByPk = async (id) => {
  const user = await service.getByPk(id);
  return user;
};

module.exports = {
  addUser,
  getAll,
  getByPk,
};