const service = require('../services');

const auth = async (req, res) => {
  const token = await service.auth(req.body);
  res.status(200).json({ token });
};

module.exports = {
  auth,
};