const path = require('path');
const express = require('express');
const apiController = require('./controller/projectController');
const userController = require('./controller/userController');
const apiRouter = require('./routes/api')

const app = express();
//body parser without npm bodyParser
app.use(express.json());



//serving static:
// app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
    res.send('connected to dummy server!')
});

app.post('/login', userController.login, (req, res) => {
    //login successful!
    res.send('LOGIN SUCCESS! would send truthy value, and you would redirect via react router, else redirect to login/sign up again.')
});

app.post('/signup', userController.signup, (req, res) => {
    //signup successful!
    res.send('SIGNUP SUCCESS!')
});

app.use('/api', apiRouter);











app.listen(3000);