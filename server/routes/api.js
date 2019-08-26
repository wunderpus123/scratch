const express = require('express');
const projectController = require("../controller/projectController");
const userController = require("../controller/userController");

const apiRouter = express.Router();

//serves projects:
// apiRouter.get('/projects', projectController.getAll);

//add project:
// apiRouter.post('/projects', projectController.addProject);

//get project with id and serve cards
// apiRouter.get('/projects/:id', projectController.getCards);

// get cards
apiRouter.get('/projects/:id', projectController.getCard, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});

// add task
apiRouter.post('/projects/task', projectController.addCard, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});

// update card
apiRouter.patch('/projects/task', projectController.updateCard, projectController.getCard, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});

// delete card
apiRouter.delete('/projects/task', projectController.deleteCard, projectController.getCard, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});


module.exports = apiRouter;