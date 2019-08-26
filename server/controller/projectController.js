const db = require('../data/database');

//api controller should route all reqs
const projectController = {};

//serves all projects:
//! updated to get project
projectController.getAll = (req, res, next) => {
//changed it to no cookies
//cookies' username so server can query the projects using the uid in projectTable (which should relate to the userTable's id)
    const { userId } = res.locals
    console.log('res.locals!', res.locals.userId)
    db.query(`SELECT id, projectname FROM project WHERE project.userid = $1`, [userId])
      .then(data => {
        if (!data) res.send('no project found! add one here: (should have a button to add project)')
        //if projects are found, send all projects to client
        res.locals.projectData = data.rows;
        return next();
      })
      .catch(err => console.log('error:', err));
}

//! Get all cards in the project
//serves all cards for scrumboard
projectController.getCard = (req, res, next) => {
  //using param, query all tasks using id;
    // const { id } = req.params;
    // console.log('Project ID', id) 
      db.query(`SELECT id, title, owner, status FROM task WHERE projectid = 1`)
        .then(data => {
        if (!data) res.send('no tasks at this time! add one here: (should have a button to add task')
        console.log('all tasks from db:', data.rows)
  //should send client all tasks (would need to map over in front end to display each task)
        res.locals.taskData = data.rows;
        return next() 
        })
        .catch(err => console.log('error finding tasks', err))
  }

//! add card in the project
//adds a single task/card
projectController.addCard = (req, res, next) => {
  // grab task fields from req.body
  const { title, status, id, owner } = req.body;
  console.log('ID', id) 
    db.query(`INSERT INTO task( title, status, id, owner ) VALUES($1, $2, $3, $4)`, [title, status, id, owner])
      .then(data => {
      if (!data) return res.send('error adding task to db', err)
      console.log('all tasks from db:', data.rows)
  //should send client all tasks (would need to map over in front end to display each task)
      res.locals.taskData = data.rows;
      return next() 
      })
      .catch(err => console.log('error finding tasks', err))
  }

//! update card in the project
//updates card:
projectController.updateCard = (req, res, next) => {
  // grab task fields from req.body
  const { taskname, status, id } = req.body;
  console.log('task id', id) 
    db.query(`UPDATE task SET taskname = $1, status = $2 WHERE id = $3`, [taskname, status, id])
      .then(data => {
      if (!data) return res.send('error updating task to db', err)
      console.log('all tasks from db:', data.rows)
  //should send client all tasks (would need to map over in front end to display each task)
      res.locals.taskData = data.rows;
      return next() 
      })
      .catch(err => console.log('error updating task', err))
  }

//! delete card from the project
//delete card:
projectController.deleteCard = (req, res, next) => {
    
    //using param, query tasks using id;
    const { id } = req.params;
    console.log('taskid', id ) 
      db.query(`DELETE FROM task WHERE id = $1`, [id])
        .then(data => {
        if (!data) return res.send('error finding that task to delete')
        console.log('all tasks from db:', data.rows)
  //should send client all tasks (would need to map over in front end to display each task)
        res.locals.taskData = data.rows;
        return next() 
        })
        .catch(err => console.log('error finding tasks', err))
  }

//add a project:
// projectController.addProject = (req, res) => {
//     const username = req.cookies.username;
// //req should come with project name to input into database;
//     const { projectName } = req.body;
//     //incomplete query: need to figure out how to join usertable and project table to add a uid so in get reqs, they will be able to access that specific project.
//     db.query(`INSERT INTO projectTable (projectName) VALUES ($1)`, [projectName])
//       .then(data => {
//         if (!data) console.log('creating project failed!');
//     //placeholder/dummy response: client should redirect to getAll? (if fetch is success)
//         res.json('project added!')
//       })
//       .catch(err => console.log('error:', err))
// };

// //serves one scrum board for one project, based on the paramId
// projectController.getProject = (req, res, next) => {
// //refer to above: have not figured out how to set a projectId that relates to userTable during the add portion yet - will need to look into; any ideas?
//     const projectId = req.params.id;
// //if i have that info, this query should be ok:
//     db.query(`SELECT project FROM projectTable WHERE project_id=$1`, [projectId])
//       .then(data => {
//         if (!data) res.send('no project with that id!');
// //in success, should render the project's cards in next middleware
//         return next();
//       })
//       .catch(err => console.log('error:', err));
// };

// //serves all cards for scrumboard
// projectController.getCards = (req, res, next) => {
// //using param, query all tasks using id;
//     const projectId = req.params.id;
//     db.query(`SELECT * FROM tasksTable WHERE project_id=$1`, [projectId])
//       .then(data => {
//       if (!data) res.send('no tasks at this time! add one here: (should have a button to add task')
//       console.log('all tasks from db:', data.rows)
// //should send client all tasks (would need to map over in front end to display each task)
//       return res.json(data.rows); 
//       })
// }

// //adds a single task/card
// projectController.addCard = (req, res, next) => {
// //adds it based on the project Id (sent from params)
//     const projectId = req.params.id
// //destructures given req with task
//     const { task } = req.body;
//     db.query(`INSERT INTO taskTable (project_id, task) VALUES ($1, $2)`, [projectId, task])
//       .then(data => {
//         if (!data) console.log('adding task failed!');
//         res.send('task added!')
//       })
//       .catch(err => console.log('err:', err));
// }

// //updates card:
// projectController.updateCard = (req, res) => {
// //updates based on cardId given from the params
//   const cardId = req.params.id
// //destructures update to patch in db;
//   const { update } = req.body;
//   db.query(`UPDATE taskTable SET task=$1 WHERE id=$2`, [update, cardId])
//     .then(data => {
//       if (!data) console.log('updating task failed!');
//       res.send('task updated!')
//     })
//     .catch(err => console.log('err:', err));
// }


// //deletes card:
// projectController.deleteCard = (req, res) => {
// //based on cardid from param;
//   const cardId = req.params.id
//   db.query(`DELETE FROM taskTable WHERE id=$1`, [cardId])
//     .then(data => {
//       if (!data) console.log('deleting task failed!');
//       res.send('task deleted!')
//     })
//     .catch(err => console.log('err:', err));
// }

module.exports = projectController;