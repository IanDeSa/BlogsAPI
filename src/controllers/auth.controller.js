const service = require('../services/auth.service');

const auth = async (req, res) => {
  const token = await service.auth(req.body);
  return res.status(200).json({ token });
};

module.exports = {
  auth,
};