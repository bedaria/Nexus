const model = require('../models/admin');

/* ------------------- TO DO LIST ------------------- */
exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos
}

function addTodo(req, res) {
  const todo = req.body;
  todo.userId = req.params.userId;
  model.todos.add(req, res, todo);
};

function updateTodoById(req, res) {
  const todo = req.body;
  const todoId = req.params.todoId;
  model.todos.update(req, res, todo, todoId);
}

function deleteTodoById(req, res) {
  const todoId = req.params.todoId;
  model.todos.delete(req, res, todoId);
}

function fetchAllTodos(req, res) {
  const userId = req.params.userId;
  model.todos.fetchAll(req, res, userId);
}
