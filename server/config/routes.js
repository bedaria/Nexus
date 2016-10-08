const path              = require('path');
const userController    = require('../controllers/userController');

const routes = (app, express) => {
  /* User Endpoints */
  app.post('/api/user/signup', userController.signup );
  app.post('/api/user/signin', userController.signin );
  app.post('/api/user/reauthenticate', userController.reauthenticate);

  /* Serve Client Files */
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./', 'src/', 'index.html'))
  })

  /* 404 Redirection */
  app.get('*', (req, res) => res.sendStatus(404) );
};
module.exports = routes;
