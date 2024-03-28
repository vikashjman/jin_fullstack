const TaskService = require('../service/task.service');

class TaskController {
    async createTask(req, res) {
        try {
            const data = await TaskService.createTask(req.body);
            return res.status(201).json({ data });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks();
            return res.json({tasks});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteTask(req, res) {
        const { task_id } = req.params;
        try {
            await TaskService.deleteTask(task_id);
            return res.status(204).json({ message: "Deleted Successfully!" })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getTasksByProjectID(req, res) {
        const { project_id } = req.params;
        try {
            const tasks = await TaskService.getTasksByProjectID(project_id);
            return res.json({ tasks });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getTask(req, res) {
        const { task_id } = req.params;
        try {
            const task = await TaskService.getTaskById(task_id);
            return res.json({ task })
        } catch (error) {

        }
    }

    async deleteTasksByProjectId(req, res) {
        const { projectId } = req.params;
        try {
            await TaskService.deleteTasksByProjectId(projectId);
            return res.status(204).end();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new TaskController();
