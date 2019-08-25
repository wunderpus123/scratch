const express = require('express');
const projectController = require("../controller/projectController");
// const userController = require("../controller/userController");

const apiRouter = express.Router();

//onClick add project will route here:
// apiRouter.post('/project/add', projectController.addProject, projectController.getProject);

//onClick projectId will route here:
apiRouter.get('/project/:id', projectController.getProject, projectController.getTasks);

appRouter.post('/task/add', projectController.addTask, projectController.getTasks);



module.exports = apiRouter;

