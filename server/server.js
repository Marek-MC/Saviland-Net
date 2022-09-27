const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-origin", "*")
//   res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE")
//   res.header("Access-Control-Allow-Headers", "Content-Type")
// })

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Must use CORS to bypass CORS security
const cors = require('cors');
app.use(cors());




// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/user', userRouter);

// Serve static files
app.use(express.static('build'));



// App Set //
const PORT = process.env.PORT || 9001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});





