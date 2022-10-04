const service = require('../services/post.service');

const createPost = async (req, res) => {
  const post = await service.createPost(req.body);
  return res.status(201).json({ post });
};

const getAll = async (_req, res) => {
  const posts = await service.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAll,
};