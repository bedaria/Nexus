const Sequelize = require('sequelize');
const connection = require('../config/db');

const Annoucement = connection.define('user', {
  announcement: {
    type: Sequelize.VARCHAR,
  },
  cohortId: {
    type: Sequelize.INTEGER,
  },
  timeCreated: {
    type: Sequelize.DATE,
  },
  lastEdit: {
    type: Sequelize.DATE,
  },
}

module.exports = Annoucement;
