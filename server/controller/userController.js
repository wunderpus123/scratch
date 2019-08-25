const userController = {}
const pool = require('../data/database');
  
// signup controller

// userController.signup = (req, res, next) => {
//     // const{ credentials } = req.body;
//     //fetch request to database (INSERT query into userTable)
//     //if fetch is succcesfful 
//     return next();
// };

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
    // connect to db
    pool.connect(function(err) {
        if(err) return console.error('error running connection', err);
        // query the user info table with the user name
        pool.query(queryObj)
            .then(data => {
                console.log(data.rows[0].password);
                // if data found, check if the password matches the password from result
                if(data.rows[0].password === password) res.status(200).send('User Verified!!!')
                    //! need to save userID in res.locals
                    //! need to redirect/chain project controller middleware in server
                else res.send('invalid user password!')
                    // redirect to 
            })
            .catch(err => console.error('error running query', err))
      })
    return next();
}

module.exports = userController;