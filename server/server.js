const path = require("path");
const express = require("express");
const projectController = require("./controller/projectController");
const userController = require("./controller/userController");
const apiRouter = require("./routes/api");


const app = express();
//body parser without npm bodyParser
app.use(express.json());

//serving static:
app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// when user attempts to login from main page
  // userController.login verifies the user - saves user id to res.locals
  // 
app.post('/login', userController.login, projectController.getAll, (req, res, next) => {
    // once received data in the res.locals, send project data to the client
    res.status(200).json(res.locals.projectData);
});

app.post('/signup', userController.signup, (req, res) => {
    //signup successful!
    res.json(res.locals.userData);
});

// app.post('/signup', userController.signup, (req, res) => {
//   //signup successful!
//   return;
// });

app.get('/api/projects/:id', projectController.getCards, (req ,res) => {
  // once received data in the res.locals, send task data to the client
  return res.status(200).json(res.locals.taskData);
});

app.use('/api', apiRouter);

app.listen(3000);
