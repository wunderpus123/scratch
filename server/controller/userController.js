const userController = {}
const pool = require('../data/database');

// pool.connect(function(err) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     pool.query('SELECT * FROM userinfo', function(err, result) {
//       if (err) {
//         return console.error('error running query', err);
//       }
//       console.log(result.rows[0]);
//       pool.end();
//     })
//   })

// let username = 'test';
// let query = {
//     text: 'SELECT username, password FROM userinfo WHERE username = $1',
//     values: [username]
// }

// pool.connect(function(err) {
//     if(err) return console.error('error running query', err);
//     pool.query(query)
//         .then(res => console.log(res.rows))
//         .catch(err => console.error('error running query', err))
//   })
  
//signup

// userController.signup = (req, res, next) => {
//     // const{ credentials } = req.body;
//     //fetch request to database (INSERT query into userTable)
//     //if fetch is succcesfful 
//     return next();
// };

//login
userController.login = (req, res, next) => {
    // get user name and password from request body
    const { username, password } = req.params;
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
                console.log(data.rows[0]);
                // if data found, check if the password matches the password from result
                if(data.rows === password && data.rows.password) res.status(200).send('User Verified!!!')
                else res.send('invalid user password!')
            })
            .catch(err => console.error('error running query', err))
      })
    return next();
}





module.exports = userController;