const db = require('../data/elephantsql');

//api controller should route all reqs
const projectController = {};

projectController.getAll = (req, res) => {
    const username = req.cookies.username;
    db.query(`SELECT projectTable.id, projectTable.projectName FROM userTable INNER JOIN projectTable ON userTable.id=projectTable.uid WHERE userTable.username=$1`, [username])
      .then(data => {
        if (!data) res.send('no project found! add one here: (shoudl have a button to add project')
        res.json(data.rows)
      })
      .catch(err => console.log('error:', err));
}

projectController.addProject = (req, res) => {
    const username = req.cookies.username;
    const { projectName } = req.body;
    //incomplete query: need to figure out how to join usertable and project table to add a uid.
    db.query(`INSERT INTO projectTable (projectName) VALUES ($1)`, [projectName])
      .then(data => {
        if (!data) console.log('creating project failed!');
        res.json('project added!')
      })
      .catch(err => console.log('error:', err))
};

projectController.getProject = (req, res, next) => {
    //save parameterized id to save into db;
    const projectId = req.params.id;
    db.query(`SELECT project FROM projectTable WHERE project_id=$1`, [projectId])
      .then(data => {
        if (!data) res.send('no project with that id!');
        return next();
      })
      .catch(err => console.log('error:', err));
};

projectController.getCards = (req, res, next) => {
    const projectId = req.params.id;
    db.query(`SELECT * FROM tasksTable WHERE project_id=$1`, [projectId])
      .then(data => {
      if (!data) res.send('no tasks at this time! add one here: (should have a button to add task')
      console.log('all tasks from db:', data.rows)
      return res.json(data.rows); 
      })
}

projectController.addCard = (req, res, next) => {
    const projectId = req.params.id
    const { task } = req.body;
    db.query(`INSERT INTO taskTable (project_id, task) VALUES ($1, $2)`, [projectId, task])
      .then(data => {
        if (!data) console.log('adding task failed!');
        res.send('task added!')
      })
      .catch(err => console.log('err:', err));
}

projectController.updateCard = (req, res) => {
  const cardId = req.params.id
  const { update } = req.body;
  db.query(`UPDATE taskTable SET task=$1 WHERE id=$2`, [update, cardId])
    .then(data => {
      if (!data) console.log('updating task failed!');
      res.send('task updated!')
    })
    .catch(err => console.log('err:', err));
}

projectController.deleteCard = (req, res) => {
  const cardId = req.params.id
  db.query(`DELETE FROM taskTable WHERE id=$1`, [cardId])
    .then(data => {
      if (!data) console.log('deleting task failed!');
      res.send('task deleted!')
    })
    .catch(err => console.log('err:', err));
}

module.exports = projectController;
