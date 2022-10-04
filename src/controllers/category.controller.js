const service = require('../services/category.service');

const addCategory = async (req, res) => {
  const category = await service.addCategory(req.body);
  return res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await service.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  addCategory,
  getAll,
};