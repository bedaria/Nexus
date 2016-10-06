const User = require('../models/userModel');
const ToDo = require('../models/toDoModel');
const Announcement = require('../models/announcementModel');
const Cohort = require('../models/cohortModel');

connection
  .sync()
  .then(err => console.log('Models sync'));
  .catch(err => console.log('An error occurred while creating the table:', err));

module.exports = {
  User,
  ToDo,
  Announcement,
  Cohort
}
