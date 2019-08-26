const userController = {}
const db = require('../data/database');
  
// signup controller
userController.signup = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.body.credentials;
    console.log(req.body.credentials)

    //! NEED TO ADD BCRYPTTED PASSWORD GENERATION HERE and make password bcrypt

    // create a user object to pass in to a INSERT statement
    const queryText = 'INSERT INTO userinfo(username, password) VALUES($1, $2)'

    db.query(queryText, [username, password])
      .then((data) => {
          console.log()
          res.locals.userData = data;
          return next()
      })
      .catch((err) => {
          console.error('error adding user to db', err);
          res.status(404).send('User NOT ADDED');
      })
};

// login controller
userController.login = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.body.credentials;
    console.log(req.body.credentials)
    // set up a query object with username passed in to verify password
    const queryText = 'SELECT id, username, password FROM userinfo WHERE username = $1'

    //! NEED TO ADD BCRYPT STUFF HERE!!
    
    // query the user info table with the user name
    db.query(queryText, [username])
      .then((data) => {
        console.log('data.rows[0].id', data.rows[0].id);
        if(!data.rows.length) res.send('invalid user password!')
        // if data found, check if the password matches the password from result
        if(data.rows[0].password === password) {
            // save id to res.locals and pass it to the next middleware, get card, project;
            res.locals.userId = data.rows[0].id;
            console.log('res.locals added', res.locals.userId);
            return next();
        }
            //! redirect to signup page (will be handled on FE?)
      })
      .catch((err) => {
        console.error('error finding user in db', err);
        res.status(404).send('User not verified');
      })
}

module.exports = userController;
