const db = require('../data/database');

const projectController = {};

// serves all projects - SCOPE CHANGE - once login successful, directly serve cards for project 1
// projectController.getAll = (req, res, next) => {
//     const { userId } = res.locals
//     db.query(`SELECT id, projectname FROM project WHERE project.userid = $1`, [userId])
//       .then(data => {
//         if (!data) res.send('no project found! add one here: (should have a button to add project)')
//         res.locals.projectData = data.rows;
//         return next();
//       })
//       .catch(err => console.log('error:', err));
// }

// serves all cards for scrumboard - CURRENTLY HARD CODED TO GRAB CARDS FOR projectid = 1
projectController.getCards = (req, res, next) => {
      // query the database to grab all cards from projectid 1
      db.query(`SELECT id, title, owner, status FROM task WHERE projectid = 1`)
        .then(data => {
          if (!data) res.send('no tasks at this time! add one here: (should have a button to add task')
          // if no errors add data returned in res.locals
          res.locals.taskData = data.rows;
          return next() 
        })
        .catch(err => console.log('error finding tasks', err))
  }

// adds a single task/card
projectController.addCard = (req, res, next) => {
  // grab task fields from req.body
  const { title, owner } = req.body.taskData;
    // send a INSERT query to the database - CURRENTLY HARD CODED TO projectid = 1
    db.query(`INSERT INTO task( title, owner, projectid ) VALUES($1, $2, $3) RETURNING *`, [title, owner, 1])
      .then(data => {
        if (!data) return res.send('error adding task to db', err)
        // if no errors add data returned in res.locals
        res.locals.taskData = data.rows;
        return next() 
      })
      .catch(err => console.log('error finding tasks', err))
  }

// updates card:
projectController.updateCard = (req, res, next) => {
  // grab task fields from req.body
  const { taskId, newStatus }= req.body;
    // run query to update status for task id passed in
    db.query(`UPDATE task SET status = $1 WHERE id = $2`, [newStatus, taskId])
      .then(data => {
        if (!data) return res.send('error updating task to db', err)
        console.log('database record updated...')
        return next() 
      })
      .catch(err => console.log('error updating task', err))
  }

// delete card:
projectController.deleteCard = (req, res, next) => {
    
    // grab id from req.body
    const { id } = req.body;
      // delete query to delete task
      db.query(`DELETE FROM task WHERE id = $1`, [id])
        .then(data => {
          if (!data) return res.send('error finding that task to delete')
        return next() 
        })
        .catch(err => console.log('error finding tasks', err))
  }


module.exports = projectController;
