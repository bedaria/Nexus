const Sequelize = require('sequelize');
const connection = require('../config/db');

const Announcement = connection.define('announcement', {
  announcement: {
    type: Sequelize.STRING,
  },
  cohortId: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Announcement;
