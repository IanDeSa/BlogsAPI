const { BlogPost, User, Category, PostCategory } = require('../models');
const { validationCategoryIds } = require('../validations/post.validation');

const addPost = async ({ title, content, categoryIds }, id) => {
  if (await validationCategoryIds(categoryIds)) {
    const post = await BlogPost.create({ title, content, userId: id });
    await categoryIds.map((categoryId) => PostCategory.create({
      postId: post.id,
      categoryId,
    }));
  return post;
  } 
  return null;
};

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

const updated = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const post = await getByPk(id);
  return post;
};

const destroy = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  addPost,
  getAll,
  getByPk,
  updated,
  destroy,
};