const db = require('../data/elephantsql');

//api controller should route all reqs
const projectController = {};


//serves all projects:
projectController.getAll = (req, res) => {
//cookies' username so server can query the projects using the uid in projectTable (which should relate to the userTable's id)
    const username = req.cookies.username;
    db.query(`SELECT projectTable.id, projectTable.projectName FROM userTable INNER JOIN projectTable ON userTable.id=projectTable.uid WHERE userTable.username=$1`, [username])
      .then(data => {
        if (!data) res.send('no project found! add one here: (shoudl have a button to add project')
        //if projects are found, send all projects to client
        res.json(data.rows)
      })
      .catch(err => console.log('error:', err));
}

//add a project:
projectController.addProject = (req, res) => {
    const username = req.cookies.username;
//req should come with project name to input into database;
    const { projectName } = req.body;
    //incomplete query: need to figure out how to join usertable and project table to add a uid so in get reqs, they will be able to access that specific project.
    db.query(`INSERT INTO projectTable (projectName) VALUES ($1)`, [projectName])
      .then(data => {
        if (!data) console.log('creating project failed!');
    //placeholder/dummy response: client should redirect to getAll? (if fetch is success)
        res.json('project added!')
      })
      .catch(err => console.log('error:', err))
};

//serves one scrum board for one project, based on the paramId
projectController.getProject = (req, res, next) => {
//refer to above: have not figured out how to set a projectId that relates to userTable during the add portion yet - will need to look into; any ideas?
    const projectId = req.params.id;
//if i have that info, this query should be ok:
    db.query(`SELECT project FROM projectTable WHERE project_id=$1`, [projectId])
      .then(data => {
        if (!data) res.send('no project with that id!');
//in success, should render the project's cards in next middleware
        return next();
      })
      .catch(err => console.log('error:', err));
};

//serves all cards for scrumboard
projectController.getCards = (req, res, next) => {
//using param, query all tasks using id;
    const projectId = req.params.id;
    db.query(`SELECT * FROM tasksTable WHERE project_id=$1`, [projectId])
      .then(data => {
      if (!data) res.send('no tasks at this time! add one here: (should have a button to add task')
      console.log('all tasks from db:', data.rows)
//should send client all tasks (would need to map over in front end to display each task)
      return res.json(data.rows); 
      })
}

//adds a single task/card
projectController.addCard = (req, res, next) => {
//adds it based on the project Id (sent from params)
    const projectId = req.params.id
//destructures given req with task
    const { task } = req.body;
    db.query(`INSERT INTO taskTable (project_id, task) VALUES ($1, $2)`, [projectId, task])
      .then(data => {
        if (!data) console.log('adding task failed!');
        res.send('task added!')
      })
      .catch(err => console.log('err:', err));
}

//updates card:
projectController.updateCard = (req, res) => {
//updates based on cardId given from the params
  const cardId = req.params.id
//destructures update to patch in db;
  const { update } = req.body;
  db.query(`UPDATE taskTable SET task=$1 WHERE id=$2`, [update, cardId])
    .then(data => {
      if (!data) console.log('updating task failed!');
      res.send('task updated!')
    })
    .catch(err => console.log('err:', err));
}


//deletes card:
projectController.deleteCard = (req, res) => {
//based on cardid from param;
  const cardId = req.params.id
  db.query(`DELETE FROM taskTable WHERE id=$1`, [cardId])
    .then(data => {
      if (!data) console.log('deleting task failed!');
      res.send('task deleted!')
    })
    .catch(err => console.log('err:', err));
}

module.exports = projectController;
