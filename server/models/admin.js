const db = require('../config/db');

/* ------------------- TO DO LIST ------------------- */
const addTodo = (req, res, todo) => {
  console.log('Inside addTodo:', todo);
  db.Todo.create(todo)
    .then((todo) => {
      res.status(200).send(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const updateTodoById = (req, res, todo, todoId) => {
  console.log('Inside updateTodoById:', todo);
  db.Todo.update(todo, { where: { id: todoId } })
    .then(() => {
      res.status(200).send('Successfully updated todo item:', todoId);
    })
    .catch((err) => {
      res.status(500).send('Failed to update todo item:', todoId);
    });
};

const deleteTodoById = (req, res, todoId) => {
  console.log('Inside deleteTodoById');
  db.Todo.findById(todoId)
    .then((todo) => {
      todo.destroy();
      res.status(200).send('Successfully deleted todo item:', todo.id);
    })
    .catch((err) => {
      res.status(500).send('Failed to delete todo item:', todo.id);
    });
};

const fetchAllTodos = (req, res, userId) => {
  db.Todo.findAll({ where: { adminId: userId } })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const addAnnouncement = (req, res) => {
  const cohortId = (cohort) => {
    if(cohort.toLowerCase() === 'juniors')
      return 49
    else
      return 53
  }
  // db.Cohort.create({cohort: 49});
  // db.Cohort.create({cohort: 53});
  db.Announcement.create({announcement: req.body.message, CohortId: cohortId(req.body.cohort)})
    .then(() => res.status(200).send("announcement created"))
    .catch(() => res.status(500).send("server error"))
});

const getAnnouncements = (req, res) => {
  db.Announcement.findAll()
  .then(announcements => {
    res.status(200).json({announcements:
      announcements.map(announcement => announcement.dataValues.announcement)})
  })
  .catch((err) => console.log("ERROR: ", err))
}

exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos
}

exports.announcements = {
  addAnnouncement: addAnnouncement,
  getAnnouncements: getAnnouncements
}
