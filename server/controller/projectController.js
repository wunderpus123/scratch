const db = require('../data/elephantsql');

//api controller should route all reqs
const projectController = {};

// projectController.addProject = (req, res) => {
//   const { id } = req.paras.id;
//   const username = req.cookies.username;
//   db.query(`INSERT INTO projectTable (project_id, username) VALUES ($1, $2), [id, username]`)
//     .then(data => {
//       if (!data) console.log('creating project failed!');
//       return next();
//     })
//     .catch(err => console.log('error:', err))
// };

// projectController.getProject = (req, res, next) => {
//   verify credentials and if found, next middleware that will render the tasks;
//   const id = req.params.id;
//   console.log(id);
//   res.json({ message: 'testing...connected'});
//   const username = req.cookies.username;
//   db.query(`SELECT project FROM projectTable WHERE project_id=$1`, [id])
//     .then(data => {
//       if (!data) res.send('no project found! add one here:');
//       res.locals.id = id;
//       return next();
//     })
//     .catch(err => console.log('error:', err));
// };

// projectController.addTask = (req, res, next) => {
//     const username = req.cookies.username;
//     db.query(`INSERT INTO taskTable (project_id, ) VALUES ($1), [id]`)
//       .then(data => {
//         if (!data) console.log('adding task failed!');
//         next();
//       })
//       .catch(err => console.log('err:', err));
// }

// projectController.getTasks = (req, res, next) => {s
//   const username = req.cookies.username;
//   db.query(`SELECT * FROM tasksTable WHERE project_id=$1`, [id])
//     .then(data => {
//       if (!data) res.send('no tasks at this time! add one here:')
//       return next();
//     })
// }
module.exports = projectController;
