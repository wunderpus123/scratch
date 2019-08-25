const userController = {};

//signup

userController.signup = (req, res, next) => {
  // const{ credentials } = req.body;
  //fetch request to database (INSERT query into userTable)
  //if fetch is succcesfful
  return next();
};

//login
userController.login = (req, res, next) => {
  // const{ credentials } = req.body;
  //if login credentials matches, go to next middleware;
  return next();
};

module.exports = userController;
