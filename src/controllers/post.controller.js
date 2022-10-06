const service = require('../services');
const JWT = require('../utils/JWT');

const addPost = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = await JWT.tokenValidation(token);
  const post = await service.post.addPost(req.body, id);
  return ((post === null) 
  ? res.status(400).json({ message: '"categoryIds" not found' }) : res.status(201).json(post));
};

const getAll = async (_req, res) => {
  const posts = await service.post.getAll();
  return res.status(200).json(posts);
};

const getByPk = async (req, res) => {
  const { id } = req.params;
  const post = await service.post.getByPk(id);
  return ((post === null) 
  ? res.status(404).json({ message: 'Post does not exist' }) : res.status(200).json(post));
};

module.exports = {
  addPost,
  getAll,
  getByPk,
};