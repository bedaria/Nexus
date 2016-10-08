const db = require('../config/db');

/* ------------------- TO DO LIST ------------------- */
exports.addTodo = (req, res, todo) => {
  console.log('Inside addTodo:', todo);
  db.Todo.create(todo)
    .then((todo) => {
      res.status(200).send(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.updateTodoById = (req, res, todo, todoId) => {
  console.log('Inside updateTodoById:', todo);
  db.Todo.update(todo, { where: { id: todoId } })
    .then(() => {
      res.status(200).send('Successfully updated todo item:', todoId);
    })
    .catch((err) => {
      res.status(500).send('Failed to update todo item:', todoId);
    });
};

exports.deleteTodoById = (req, res, todoId) => {
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

exports.fetchAllTodos = (req, res, userId) => {
  console.log('Inside fetchAllTodos');
  db.Todo.findAll({ where: { adminId: userId } })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
