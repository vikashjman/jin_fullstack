const express = require('express');
const projectController = require('../controller/project.controller');
const taskController = require('../controller/task.controller');
const workController = require('../controller/work.controller');

const router = express.Router();

// Project routes
router.post('/projects', projectController.createProject);
router.get('/projects', projectController.getAllProjects);
router.get('/projects/:project_id', projectController.getProject);
router.delete('/projects/:project_id', projectController.deleteProject);

// Task routes
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:task_id', taskController.getTask);
router.delete('/tasks/:task_id', taskController.deleteTask)
router.delete('/tasks/projects/:project_id', taskController.deleteTasksByProjectId);
router.get('/tasks/projects/:project_id', taskController.getTasksByProjectID);

// Work routes
router.post('/works', workController.createWork)
router.get('/works', workController.getAllWork)
router.delete('/works', workController.clear)
router.post('/works/save', workController.clearAndSave)


module.exports = router;
