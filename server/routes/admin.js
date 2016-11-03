const router     = require('express').Router();
const path       = require('path');
const controller = require('../controllers/admin');

/* ------------------- TO DO LIST ------------------- */
router.get('/admin/user/todos', controller.todos.fetchAll);
router.post('/admin/user/todos', controller.todos.add);
router.delete('/admin/user/todos/:todoId', controller.todos.delete);

/* ------------------- USER SIGNUP + LOGIN ------------------- */
router.post('/admin/user/signup', controller.auth.signUp);
router.post('/admin/user/signin', controller.auth.signIn);

/*------------------ TABLES ------------------*/
router.post('/admin/table', controller.table.add);

/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404));

module.exports = router;
