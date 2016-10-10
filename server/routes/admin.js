const router            = require('express').Router();

const path              = require('path');
const controller        = require('../controllers/admin');

router.post('/admin/users', (req, res) => {
  res.status(200).send('POST /api/admin/users');
});

/* ------------------- TO DO LIST ------------------- */
router.post('/admin/users/:userId/todos', controller.todos.add);
router.put('/admin/users/:userId/todos/:todoId', controller.todos.update);
router.delete('/admin/users/:userId/todos/:todoId', controller.todos.delete);
router.get('/admin/users/:userId/todos', controller.todos.fetchAll);

/* ------------------- USER SIGNUP + LOGIN ------------------- */

router.post('/admin/user/signup', controller.auth.signUp);
router.post('/admin/user/signin', controller.auth.signIn);

/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404) );


module.exports = router;
