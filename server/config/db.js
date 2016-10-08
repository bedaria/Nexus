const Sequelize = require('sequelize');
const config    = require('./config');
const db = new Sequelize(config.uri);

db
  .authenticate()
  .then(success => console.log('Sequelize connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to Sequelize database:', err));

/* ------------------- USER ------------------- */
const User = db.define('user', {
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      len: [1, 255]
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cohortId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  profilePic: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true
  },
});

/* ------------------- COHORT ------------------- */
const Cohort = db.define('cohort', {
  cohort: {
    type: Sequelize.INTEGER
  }
});

/* ------------------- ANNOUNCEMENT ------------------- */
const Announcement = db.define('announcement', {
  announcement: {
    type: Sequelize.STRING,
  },
  cohortId: {
    type: Sequelize.INTEGER,
  },
});

/* ------------------- TO DO LIST ------------------- */
const Todo = db.define('todo', {
  todo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
  }
});

/* ------------------- ASSOCIATIONS ------------------- */
User.hasMany(Todo);
Cohort.hasMany(User);
Cohort.hasMany(Announcement);

module.exports = {
  User,
  Todo,
  Announcement,
  Cohort
};
