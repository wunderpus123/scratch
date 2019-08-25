const express = require('express');
const projectController = require("./controller/projectController");
const userController = require("./controller/userController");

const apiRouter = express.Router();
//can only access /api if login is authorized; should probably store in req.locals.username in userControllers so any path at /api has access to username. 

apiRouter.get('/:id', projectController.getProject);



module.exports = apiRouter;

