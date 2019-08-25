const express = require('express');
const projectController = require("../controller/projectController");
const userController = require("../controller/userController");

const apiRouter = express.Router();

//serves projects:
apiRouter.get('/projects', projectController.getAll);

//add project:
apiRouter.post('/projects', projectController.addProject);

//get project with id and serve cards
apiRouter.get('/projects/:id', projectController.getProject, projectController.getCards);

//add card:
apiRouter.post('/projects/:id', projectController.addCard);

//update card
apiRouter.patch('/cards/:id', projectController.updateCard);

//delete card
apiRouter.delete('/cards/:id', projectController.deleteCard);



module.exports = apiRouter;

