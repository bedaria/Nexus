const User = require('../models/userModel');
const ToDo = require('../models/toDoModel');
const Announcement = require('../models/announcementModel');
const Cohort = require('../models/cohortModel');
const connection = require('../config/db.js');

User.hasMany(ToDo);
Cohort.hasMany(User);
Cohort.hasMany(Announcement);

connection
  .sync()
  .then(success => console.log('Models sync'))
  .catch(err => console.log('An error occurred while creating the table:', err));

module.exports = {
  User,
  ToDo,
  Announcement,
  Cohort
}
