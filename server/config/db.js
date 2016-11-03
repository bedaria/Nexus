const Sequelize = require('sequelize');
const config    = require('./config');
const db = new Sequelize(config.uri);

db
  .authenticate()
  .then(success => console.log('Sequelize connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to Sequelize database:', err));

/* ------------------- USER ------------------- */
const User = db.define('User', {
  email: {
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
const Cohort = db.define('Cohort', {
  cohort: Sequelize.INTEGER
});

/* ------------------- ANNOUNCEMENT ------------------- */
const Announcement = db.define('Announcement', {
  announcement: Sequelize.STRING
});

/* ------------------- TO DO LIST ------------------- */
const Todo = db.define('Todo',
  {
    todo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: Sequelize.INTEGER
  },
  {
    tableName: 'Todos',
    timestamps: true
  }
);

/*-----------------Table---------------------*/
const TableRow = db.define('table',
  {
    tableName: Sequelize.STRING,
    tableRow: Sequelize.STRING,
    tableId: Sequelize.STRING
  }
);


/* ------------------- ASSOCIATIONS ------------------- */
User.hasMany(Todo, { foreignKey: 'adminId' });
Cohort.hasMany(User);
Cohort.hasMany(Announcement);

db.sync()
  .then(() => console.log("Models successfully synced."))
  .catch(() => console.log("Couldn't sync models."));

module.exports = {
  User,
  Cohort,
  Announcement,
  Todo,
  TableRow
};
