const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  'postgres://'+ [process.env.db_user]+':'+[process.env.db_pass]+'@aws-us-east-1-portal.23.dblayer.com:15898/compose'
);


module.exports = connection;
