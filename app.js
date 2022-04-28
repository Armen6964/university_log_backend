var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { ERROR } = require("./utils");
var cors = require("cors");

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

require("./utils/swagger")(app);

app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));

app.use((req, res, next) => {
  return ERROR(res, "Incorrect url");
});

app.use((err, req, res, next) => {
  ERROR(res, err.message);
});

module.exports = app;
