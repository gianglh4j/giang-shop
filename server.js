'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const users = require("./server/routes/api/users");
const checkResult = require("./server/routes/api/result");
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build'))); // use for deploy production with build/
const MongoStore = require('connect-mongo')(session);
app.use(cors());





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


    // Enable cookieParser for app
    app.use(cookieParser());

    // Enable session for app
    app.use(
      session({
        secret: 'ASDSAE',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        cookie: { maxAge: 1000*60*60*24 },
      }),
    );


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./server/config/passport")(passport);




var route = require('./server/routes');

app.use(route);
// Routes
app.use("/api/users", users);
app.use("/api/result",checkResult);
app.post('/profile',
    function(req, res) { // phai set ở request : headers.Authorization = token truoc no moi xac nhan dc user. (vi du su dung postman thi phai set headers.Authorization = token thi ms post dc)
        res.send(req.user);
    }
);
app.post('/giang',function(req,res){
  res.send("hellooo")
})





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