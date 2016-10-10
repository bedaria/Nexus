require('dotenv').config();

module.exports = {
  uri: 'postgres://'+
    [process.env.db_user]+':'+
    [process.env.db_pass]+'@'+
    [process.env.db_host]+':'+
    [process.env.db_port]+'/'+
    [process.env.db_name]
};
