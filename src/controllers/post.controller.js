const service = require('../services/post.service');

const createPost = async (req, res) => {
  const post = await service.createPost(req.body);
  return res.status(201).json({ post });
};

const getAll = async (_req, res) => {
  const posts = await service.getAll();
  return res.status(200).json(posts);
};

const getByPk = async (req, res) => {
  const { id } = req.params;
  const post = await service.getByPk(id);
  return ((post === null) 
  ? res.status(404).json({ message: 'Post does not exist' }) : res.status(200).json(post));
};

module.exports = {
  createPost,
  getAll,
  getByPk,
};