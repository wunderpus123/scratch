const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser')

const apiRouter = require("./routes/api");

const app = express();
//body parser without npm bodyParser
app.use(express.json());
app.use(cookieParser());

//serving static:
app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.use('/api', apiRouter);

//input form page on load
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

//onClick to login -> verifies user in db -> send info to front end to display;
// app.post('/login', projectController.login, (req, res) => {
//     //login successful!
//     res.send('LOGIN SUCCESS! would send truthy value, and you would redirect via react router, else redirect to login/sign up again.')
// });

//onClick to signup
// app.post('/signup', userController.signup, (req, res) => {
//     //signup successful!
//     res.send('SIGNUP SUCCESS!')
// });


app.listen(3000);
