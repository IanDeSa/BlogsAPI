const service = require('../services/category.service');

const validationCategoryIds = async (categoryIds) => {
  const notFound = await categoryIds.reduce(async (acc, cur) => {
    const validateById = await service.getByPk(cur);
    if (validateById === null) return false;
    return acc;
  }, true);
  return notFound;
};

module.exports = {
  validationCategoryIds,
};