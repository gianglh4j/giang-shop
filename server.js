'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
const mongoose = require("mongoose");

const passport = require("passport");
const users = require("./server/routes/api/users");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build'))); // use for deploy production with build/

app.use(cors());


var route = require('./server/routes');

app.use(route);


// DB Config
const db = require("./server/config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./server/config/passport")(passport);
// Routes
app.use("/api/users", users);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || '4200';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));