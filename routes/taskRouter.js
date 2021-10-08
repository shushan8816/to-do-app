const express = require('express');
const TaskController = require('../controller/TaskController.js');

const taskRouter = express.Router();

taskRouter.post('/', TaskController.addTask);
taskRouter.get('/', TaskController.getAllTasks);
taskRouter.get('/:id', TaskController.getTaskById);
taskRouter.put('/:id', TaskController.updateTask);
taskRouter.delete('/:id', TaskController.deleteTask);

module.exports = taskRouter;