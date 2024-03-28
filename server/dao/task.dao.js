const db = require('../db/db');

class TaskDAO {
    async createTask(task_name, project_id) {
        const [data] = await db('task').insert({
            task_name: task_name,
            project_id: project_id
        }).returning("*");

        return data; 
    }

    async getAllTasks() {
        return await db('task').select('*');
    }

    async getTaskById(task_id) {
        return await db('task').where('task_id', task_id).first();
    }

    async deleteTask(task_id) {
        return await db('task').where('task_id', task_id).del();
    }

    async getTasksByProjectID(project_id) {
        return await db('task').where('project_id', project_id).select('*');
    }

    async deleteTasksByProjectId(projectId) {
        return await db('task').where('project_id', projectId).del();
    }
}

module.exports = TaskDAO;
