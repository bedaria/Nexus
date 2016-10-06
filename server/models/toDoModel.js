const Sequelize = require('sequelize');
const connection = require('../config/db');

const ToDo = connection.define('user', {
  toDo: {
    type: Sequelize.VARCHAR,
    complete: Sequelize.BOOLEAN
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  timeCreated: {
    type: Sequelize.DATE,
  },
  lastEdit: {
    type: Sequelize.DATE,
  },
}

module.exports = ToDo;
