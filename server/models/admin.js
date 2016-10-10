const db = require('../config/db');
const password = require('../config/passwordTools.js');
const jsonWebToken = require('jsonwebtoken');

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
  console.log('Inside fetchAllTodos');
  db.Todo.findAll({ where: { adminId: userId } })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};


/*------------------- SIGN IN/ SIGN UP ------------------- */

const signIn = (req, res, loginUsername, loginEmail, loginPassword) => {
  db.User.findOne({
    where:{
      username : loginUsername,
      email    : loginEmail
    },
    attributes: ['id', 'firstName', 'lastName', 'email', 'username', 'password', 'profilePic', 'bio']
  })
    .then( foundUser => {
      if (!foundUser) res.status(401).send('User not found.');
      else {
        // password.checkPassword(loginPassword, foundUser.password)
        //   .then(successfulMatch => {
            const token = jsonWebToken.sign(foundUser.dataValues, 'userDashboard');
            res.status(200).json({
              id: foundUser.id,
              firstName: foundUser.firstName,
              email: foundUser.email,
              username: foundUser.username,
              token: token,
            // });
          })
          // .catch(error => {
          //   console.log("Password hashing error: ", error);
          //   res.status(500).send(error);
          // })
      }
    })
    .catch( err => {
      console.log('Line 84 Error:', err);
      res.status(500).send("Password do not match", err);
    });
};

const signUp = (req, res, newUser) => {
  db.User.create(newUser)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
exports.auth = {
  signUp: signUp,
  signIn: signIn,
}

exports.todos = {
  add: addTodo,
  update: updateTodoById,
  delete: deleteTodoById,
  fetchAll: fetchAllTodos,
}

