const router = require('express').Router();
const controller = require('../controllers/admin');

/* ------------------- TO DO LIST ------------------- */
router.post('/admin/users/:userId/todos', controller.todos.add);
router.put('/admin/users/:userId/todos/:todoId', controller.todos.update);
router.delete('/admin/users/:userId/todos/:todoId', controller.todos.delete);
router.get('/admin/users/:userId/todos', controller.todos.fetchAll);

/*------------------- ANNOUNCEMENTS ----------------- */
router.post('/admin/announcements/addAnnouncement', controller.announcements.addAnnouncement);
router.get('/admin/announcements/getAnnouncements', controller.announcements.getAnnouncements);
module.exports = router;
