const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');
const db         = require('./config/db');

const app        = express();

// Routes
const adminRoutes = require('./routes/admin');

// Utilities
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../src')));

// Routing
app.use('/api', adminRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port: ', app.get('port'));
});
