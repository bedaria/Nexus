const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  'postgres://[process.env.db_user]:[process.env.db_pass]@aws-us-east-1-portal.23.dblayer.com:15898/compose'
);

connection
  .authenticate()
  .then(err => console.log('\033[34mSequelize connected. \033[0m') )
.catch(err => console.log('Unable to connect to the database:', err) );

module.exports = connection;
