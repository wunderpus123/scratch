//require database - elephantSQL?;
const db = require('../data/elephantsql');

//api controller should route all reqs
const projectController = {};

projectController.getProject = (req, res, next) => {
  //verify credentials and if found, next middleware;
  const id = req.params.id;
  const username = req.cookies.username;
  db.query(`SELECT * FROM taskTable WHERE username=$1 AND projectId=$2`, [username, projectId])
    .then(data => {
      if (!data) res.send('no project found!')
      res.locals.tasks(data.rows)
      return next();
    })
};

projectController.addProject = (req, res) => {
  //
};

//card methods;
//

//user methods;
//sign up
//sign in

//get methods:

//put methods:

//patch methods:
// app.patch("/card/:id", (req, res) => {});

//delete methods:

module.exports = projectController;
