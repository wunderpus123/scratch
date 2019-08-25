const userController = {}
const pool = require('../data/database');
  
// signup controller
userController.signup = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.body;
    console.log(req.body)

    //! NEED TO ADD BCRYPTTED PASSWORD GENERATION HERE and make password bcrypt

    // create a user object to pass in to a INSERT statement
    const queryObj = {
        text: 'INSERT INTO userinfo(username, password) VALUES($1, $2)',
        values: [username, password]
    }

    // connect to db and perform insert query to add user data
    pool.connect((err) => {
        if(err) return console.error('error running connection', err);
        pool.query(queryObj)
            .then((data) => {
                console.log(data);
                res.send('User Added')
            })
            .catch((err) => {
                console.error('error adding user to db', err);
                res.send('User NOT ADDED')
            })
    })
    return next();
};

// login controller
userController.login = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.body;
    console.log(req.body)
    // set up a query object with username passed in to verify password
    const queryObj = {
        text: 'SELECT username, password FROM userinfo WHERE username = $1',
        values: [username]
    }

    //! NEED TO ADD BCRYPT STUFF HERE!!

    // connect to db
    pool.connect((err) => {
        if(err) return console.error('error running connection', err);
        // query the user info table with the user name
        pool.query(queryObj)
            .then(data => {
                console.log(data.rows[0].password);
                // if data found, check if the password matches the password from result
                if(data.rows[0].password === password) {
                    // save id to res.locals and pass it to the next middleware, get card, project;
                    res.status(200).send('User Verified!!!')
                }
                    //! need to save userID in res.locals
                    //! need to redirect/chain project controller middleware in server
                else res.send('invalid user password!')
                    //! redirect to signup page (will be handled on FE?)
            })
            .catch(err => console.error('error running query', err))
      })
    return next();
}

module.exports = userController;