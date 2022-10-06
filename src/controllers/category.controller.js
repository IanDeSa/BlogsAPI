const service = require('../services/category.service');

const addCategory = async (req, res) => {
  const category = await service.addCategory(req.body);
  return res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await service.getAll();
  return res.status(200).json(categories);
};

const getByPk = async (req, res) => {
  const { id } = req.params;
  const category = await service.getByPk(id);
  return ((category === null) 
  ? res.status(404).json({ message: 'Category does not exist' }) : res.status(200).json(category));
};

module.exports = {
  addCategory,
  getAll,
  getByPk,
};