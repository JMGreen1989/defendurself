const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const path            = require('path');
const boxRouter       = require('./routes/boxingRoutes.js');
const grapRouter      = require('./routes/grapplingRoutes.js');
const boxController   = require('./controllers/boxController');
const grapController  = require('./controllers/grapController');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', boxRouter);
app.use('/', grapRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
