const express = require('express');
const projectController = require("../controller/projectController");
// const userController = require("../controller/userController");

const apiRouter = express.Router();

//onClick add project will route here:
// apiRouter.post('/project/add', projectController.addProject);

//onClick projectId will route here:
apiRouter.get('/project/:id', projectController.getProject);

// appRouter.get('')


module.exports = apiRouter;

