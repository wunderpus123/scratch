const userController = {}

//signup:

userController.signup = (req, res, next) => {
    // const{ username, password } = req.body;
    //set cookies so that we can maintain login authorization for projectControllers to have access to their username;
        //should have in sign up for better UX (once signed up, they can get in?)
    // res.cookie('username', username);
    //fetch request to database (INSERT query into userTable)
    //if fetch is succcesfful 
    return next();
};

//login
userController.login = (req, res, next) => {
    // const{ credentials } = req.body;
        //set cookies so that we can maintain login authorization for projectControllers to have access to their username;
    // res.cookie('username', username);
    //if login credentials matches, go to next middleware;
    return next();
}




module.exports = userController;