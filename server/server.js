const path = require("path");
const express = require("express");
// const apiController = require("./controller/projectController");
const userController = require("./controller/userController");
// const apiRouter = require("./routes/api");


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
app.post('/login', userController.login, (req, res) => {
    //login successful!
    return;
});

// app.post('/signup', userController.signup, (req, res) => {
//     //signup successful!
//     res.send('SIGNUP SUCCESS!')
// });

// app.use('/api', apiRouter);

app.listen(3000);
