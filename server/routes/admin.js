const router = require('express').Router();
const Admin = require('../models/admin');

router.post('/admin/users', (req, res) => {
  res.status(200).send('POST /api/admin/users');
});

/* ------------------- TO DO LIST ------------------- */
// addTodo
router.post('/admin/users/:userId/todos', (req, res) => {
  const todo = req.body;
  todo.userId = req.params.userId;
  Admin.addTodo(req, res, todo);
});

module.exports = router;
