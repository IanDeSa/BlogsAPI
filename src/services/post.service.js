const { BlogPost, User, Category } = require('../models');

const createPost = async () => {};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getByPk = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  return post;
};

module.exports = {
  createPost,
  getAll,
  getByPk,
};