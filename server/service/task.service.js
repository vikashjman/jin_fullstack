const TaskDAO = require('../dao/task.dao');

class TaskService {
    constructor() {
        this.taskDAO = new TaskDAO();
    }

    async createTask(taskDto) {
        const { task_name, project_id } = taskDto;
        return await this.taskDAO.createTask(task_name, project_id);
    }

    async getAllTasks() {
        return await this.taskDAO.getAllTasks();
    }

    async deleteTask(task_id) {
        return await this.taskDAO.deleteTask(task_id);
    }

    async getTaskById(task_id){
        return await this.taskDAO.getTaskById(task_id);
    }

    async getTasksByProjectID(project_id) {
        return await this.taskDAO.getTasksByProjectID(project_id);
    }

    async deleteTasksByProjectId(projectId) {
        return await this.taskDAO.deleteTasksByProjectId(projectId);
    }
}

module.exports = new TaskService();
