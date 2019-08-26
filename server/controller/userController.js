const userController = {}
const db = require('../data/database');
  
// signup controller
userController.signup = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.body;
    console.log(req.body)

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
    const { username, password } = req.body;
    console.log(req.body);
    // set up a query object with username passed in to verify password
    const queryText = 'SELECT id, username, password FROM userinfo WHERE username = $1'

    //! NEED TO ADD BCRYPT STUFF HERE!!
    
    // query the user info table with the user name
    db.query(queryText, [username])
      .then((data) => {
        console.log('data.rows[0].id', data.rows[0].id);
        // if data found, check if the password matches the password from result
        if(data.rows[0].password === password) {
            // save id to res.locals and pass it to the next middleware, get card, project;
            // res.status(200).send(data.rows[0]._id)
            res.locals.userId = data.rows[0].id;
            console.log('res.locals ADDED', res.locals.userId);
            return next()
        }
            //! need to redirect/chain project controller middleware in server
        else res.send('invalid user password!')
            //! redirect to signup page (will be handled on FE?)
      })
      .catch((err) => {
        console.error('error adding user to db', err);
        res.status(404).send('User not verified');
      })
}

module.exports = userController;
