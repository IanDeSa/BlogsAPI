const service = require('../services/user.service');

const addUser = async (req, res) => {
  const token = await service.addUser(req.body);
  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await service.getAll(req.body);
  res.status(201).json(users);
};

module.exports = {
  addUser,
  getAll,
};