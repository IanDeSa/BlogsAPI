const service = require('../services/post.service');

const createPost = async (req, res) => {
  const post = await service.createPost(req.body);
  return res.status(201).json({ post });
};

module.exports = {
  createPost,
};