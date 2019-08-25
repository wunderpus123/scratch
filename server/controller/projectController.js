//require database - elephantSQL?;
const db = require('../data/elephantsql');

//api controller should route all reqs
const projectController = {};

// projectController.addProject = (req, res) => {
  
// };
projectController.getProject = (req, res, next) => {
  //verify credentials and if found, next middleware that will render the tasks;
  const id = req.params.id;
  console.log(id);
  res.json({ message: 'connected'});
  // const username = req.cookies.username;
  // db.query(`SELECT * FROM projectTable WHERE username=$1 AND projectId=$2`, [username, id])
  //   .then(data => {
  //     if (!data) res.send('no project found! add one here:')
  //     res.locals.id = id;
  //     return next();
  //   })
  //   .catch(err => console.log('error:', err));
};

// projectController.getTasks = (req, res, next) => {
//   const username = req.cookies.username;
//   db.query(`SELECT * FROM tasksTable WHERE username=$1 AND projectId=$2`, [username, id])
//     .then(data => {
//       if (!data) res.send('no tasks at this time! add one here:')
//       return next();
//     })
// }



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
