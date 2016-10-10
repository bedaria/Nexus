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
  console.log('Inside fetchAllTodos');
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

  db.Cohort.findOne({
    where: {
      cohort: cohortId(req.body.cohort)
    }
  })
  .then((cohort) => {
    db.Announcement.create({announcement: req.body.message, CohortId: cohort.id})
      .then((announcement) =>
        res.status(200).json({message: "got a new Message",
                              messageId: announcement.id})
      )
      .catch((err) => res.status(500).send("error: ", err))
    })
  .catch((err) => res.status(500).send("ERROR: ", err))
    // cohort.addAnnouncement({"announcement": req.body.message})
    // .then(() => {
    //   console.log("announcement created")
    //   res.status(304).send()
    // })
    // .catch((err) => {
    //   console.log("did not add announcement: ", err)
    //   res.status(500).send("error")
    // })

};

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
