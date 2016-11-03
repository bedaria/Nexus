const db           = require('../config/db');
const password     = require('../config/passwordTools.js');
const jsonWebToken = require('jsonwebtoken');

/* ------------------- TO DO LIST ------------------- */
const fetchAllTodos = (req, res) => {
  console.log('Inside fetchAllTodos in model');
  db.Todo.findAll()
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const addTodo = (req, res, todo) => {
  console.log('Inside addTodo in model:', todo);
  db.Todo.create(todo)
    .then((todo) => {
      res.status(200).send(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const deleteTodo = (req, res, todoId) => {
  console.log('Inside deleteTodo in model');
  db.Todo.findById(todoId)
    .then((todo) => {
      res.status(200).send(todo);
      todo.destroy();
    })
    .catch((err) => {
      res.status(500).send('Failed to delete todo item:', todo);
    });
};

exports.todos = {
  fetchAll: fetchAllTodos,
  add: addTodo,
  delete: deleteTodo,
}

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

/*--------------------- TABLES ------------------------------ */
const addTable = (req, res) => {
  var data = req.body.data;
  var name = req.body.name;
  var id = req.body.id;
console.log("inside addTAble")
  db.Table.create({tableName: name, tableId: id})
  Promise.all(data.map(row =>
    db.TableRow.create({tableName: name, tableRow: row.toString(), tableId: id}))
  )
  .then(results => {
    // console.log("results: ", results)
    res.status(200).send({saved: true})
  })
  .catch(error => console.log("boo"))
}

exports.table = {
  add: addTable
}
