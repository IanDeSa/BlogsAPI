const express = require('express');
const middlewares = require('../middlewares');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/', middlewares.authMiddleware, controller.getAll);
router.get('/:id', middlewares.authMiddleware, async (req, res) => {
  const { id } = req.params;
  const user = await controller.getByPk(id);
  return ((user === null) 
  ? res.status(404).json({ message: 'User does not exist' }) : res.status(200).json(user));
});
router.post('/', middlewares.userMiddleware, controller.addUser);

module.exports = router;