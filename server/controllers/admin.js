const model = require('../models/admin');

/* ------------------- TO DO LIST ------------------- */
const addTodo = (req, res) => {
  const todo = req.body;
  todo.userId = req.params.userId;
  model.todos.add(req, res, todo);
};

const updateTodoById = (req, res) => {
  const todo = req.body;
  const todoId = req.params.todoId;
  model.todos.update(req, res, todo, todoId);
}

const deleteTodoById = (req, res) => {
  const todoId = req.params.todoId;
  model.todos.delete(req, res, todoId);
}

const fetchAllTodos = (req, res) => {
  const userId = req.params.userId;
  model.todos.fetchAll(req, res, userId);
}

/* ------------------- SIGN IN / SIGN UP ------------------- */

const signIn = (req, res) => {
  const loginAttempt = req.body;

  // Refactor later, to streamline form for the user to either enter username OR email
  // if((!req.body.username && !req.body.email) || !req.body.password){
  //   res.status(500).send("Invalid or missing inputs");
  // }
  // uniqueIdentifier = (req.body.username) ? 'username' : 'email';

  loginUsername = req.params.username;
  loginEmail = req.params.email;
  loginPassword = req.params.password;

  model.auth.signin(req, res, loginUsername, loginEmail, loginPassword);
};

const signUp = (req, res) => {
    const newUser = models.User.build({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      cohort: req.body.cohort,
      profilePic: req.body.profilePic,
      bio: req.body.bio,
    });
  model.auth.signUp(req, res, newUser);
};

exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos,
  signIn: signIn,
  signUp: signUp
}
