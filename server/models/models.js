const Users = require('../models/userModel');
const ToDos = require('../models/toDoModel');
const Announcements = require('../models/announcementsModel');
const Cohorts = require('../models/cohortModel');

connection
  .sync()
  .then(err => console.log('Models sync'));
  .catch(err => console.log('An error occurred while creating the table:', err));

module.exports = {
  Users,
  ToDos
  Announcements,
  Cohorts
}
