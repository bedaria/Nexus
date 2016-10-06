const Sequelize = require('sequelize');
const connection = require('../config/db');

const Announcement = connection.define('user', {
  announcement: {
    type: Sequelize.VARCHAR,
  },
  cohortId: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Announcement;
