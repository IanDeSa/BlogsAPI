const service = require('../services/user.service');

const addUser = async (req, res) => {
  const token = await service.addUser(req.body);
  res.status(201).json({ token });
};

module.exports = {
  addUser,
};