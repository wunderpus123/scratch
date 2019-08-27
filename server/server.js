const path = require("path");
const express = require("express");
const projectController = require("./controller/projectController");
const userController = require("./controller/userController");
const apiRouter = require("./routes/api");

const app = express();
// body parser without bodyParser
app.use(express.json());

// serving static files in the build folder
app.use('/build', express.static(path.join(__dirname, '..', 'build')));

// serve initial load html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// on login request, verify user, get cards
app.post('/login', userController.login, projectController.getCards, (req, res, next) => {
    // once received data in the res.locals, send project data to the client
    console.log('SENDING THIS TO CLIENT ON LOAD', res.locals.taskData)
    res.status(200).json(res.locals.taskData);
});

// sign up page TBD
app.post('/signup', userController.signup, (req, res) => {
  // once signup successful, send back the user data
  res.json(res.locals.userData);
});

app.use('/api', apiRouter);

app.listen(3000);
