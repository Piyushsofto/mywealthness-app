var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');


const env = process.env.NODE_ENV = process.env.NODE_ENV || 'local';

const app = express();

var book = require('./routes/book');
var app = express();

const originsWhitelist = [''];

originsWhitelist.push('http://localhost:4200');
originsWhitelist.push('http://localhost:8000');


app.use(cors({
  origin: (origin, callback) => {
      const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;

      callback(null, isWhitelisted);
  },
  credentials: true
}));



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist/testApp')));


// app.use('/books', express.static(path.join(__dirname, 'dist/testApp')));
// app.use('/book', book);

app.use('/api/users', /*roleMiddleware,*/ usersRouter);
app.use('/api/auth', authRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// error handler, don't remove next
app.use(function (err, req, res, next) {
  let errorCode = '';
  const errorCodes = [
      'MISSING_USERNAME',
      'MISSING_PASSWORD',
      'INVALID_USERNAME',
      'INVALID_PASSWORD',
      'INVALID_EMAIL',
      'PERMISSION_DENIED',
      'MISSING_EMAIL',
  ];

  switch (err.name) {
      case 'TokenExpiredError':
          errorCode = 'expired_token';
          break;

      case 'JsonWebTokenError':
          errorCode = 'invalid_token';
          break;

      case 'SequelizeUniqueConstraintError':
          errorCode = 'duplicated_' + Object.keys(err.fields)[0];
          break;

      case 'SequelizeDatabaseError':
          errorCode = 'invalid_inputs';
          break;

      default:
          errorCode = 'unrecognized';
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    errorCode = 'INCORRECT_FILE_SIZE';
}

if (err.message && errorCodes.includes(err.message.toUpperCase())) {
    errorCode = err.message;
}

res.json({
    success: false,
    error: {
        name: errorCode.toUpperCase()
    }
});
});

module.exports = app;