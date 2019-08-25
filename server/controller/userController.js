const userController = {}
const pool = require('../data/database');

pool.connect(function(err) {
    if(err) {
      return console.error('error running query', err);
    }
    pool.query('SELECT * FROM userinfo', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
      pool.end();
    })
  })


//signup

// userController.signup = (req, res, next) => {
//     // const{ credentials } = req.body;
//     //fetch request to database (INSERT query into userTable)
//     //if fetch is succcesfful 
//     return next();
// };

//login
userController.login = (req, res, next) => {
    const { username, password } = req.body;
    //if login credentials matches, go to next middleware;
    
    return next();
}





module.exports = userController;