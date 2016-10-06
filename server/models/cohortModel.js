const Sequelize = require('sequelize');
const connection = require('../config/db');

const Cohort = connection.define('user', {
  cohort: {
    type: Sequelize.INTEGER
  }
});

module.exports = Cohort;
