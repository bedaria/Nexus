const model = require('../models/admin');

/* ------------------- TO DO LIST ------------------- */
const fetchAllTodos = (req, res) => {
  const userId = req.params.userId;
  model.todos.fetchAll(req, res, userId);
}

const addTodo = (req, res) => {
  const todo = req.body;
  model.todos.add(req, res, todo);
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  model.todos.delete(req, res, todoId);
}

exports.todos = {
  fetchAll: fetchAllTodos,
  add: addTodo,
  delete: deleteTodo,
}

/* ------------------- SIGN IN / SIGN UP ------------------- */
const signIn = (req, res) => {
  const loginAttempt = req.body;

  // Refactor later, to streamline form for the user to either enter username OR email
  // if((!req.body.username && !req.body.email) || !req.body.password){
  //   res.status(500).send("Invalid or missing inputs");
  // }
  // uniqueIdentifier = (req.body.username) ? 'username' : 'email';

  loginUsername = loginAttempt.username;
  loginEmail = loginAttempt.email;
  loginPassword = loginAttempt.password;

  model.auth.signIn(req, res, loginUsername, loginEmail, loginPassword);
};

const signUp = (req, res) => {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      cohort: req.body.cohort,
      profilePic: req.body.profilePic,
      bio: req.body.bio,
    };
  model.auth.signUp(req, res, newUser);
};

exports.auth = {
  signIn: signIn,
  signUp: signUp,
}
