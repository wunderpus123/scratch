const express = require('express');
const projectController = require("../controller/projectController");

const apiRouter = express.Router();

// routes to get cards middleware
// apiRouter.get('/projects', projectController.getCards, (req, res, next) => {
//   res.status(200).json(res.locals.taskData);
// });

// routes to add task middleware
apiRouter.post('/projects/task', projectController.addCard, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});

// routes to update card middleware
apiRouter.patch('/projects/task', projectController.updateCard, projectController.getCards, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});

// routes to delete card middleware
apiRouter.delete('/projects/task', projectController.deleteCard, projectController.getCards, (req, res, next) => {
  res.status(200).json(res.locals.taskData);
});


module.exports = apiRouter;
