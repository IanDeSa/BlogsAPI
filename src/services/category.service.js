const { Category } = require('../models');

const addCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getByPk = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category;
};

module.exports = {
  addCategory,
  getAll,
  getByPk,
};