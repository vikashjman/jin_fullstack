const db = require('../db/db');

class ProjectDAO {
    async createProject(project_name, activity_type) {
        const [data] = await db('project').insert({
            project_name: project_name,
            activity_type: activity_type
        }).returning("*");

        return data; 
    }

    async getAllProjects() {
        const projects = await db('project')
            .select('project_id', 'project_name', 'activity_type');
        
        
        return projects;
    }

    async getProject(project_id) {
        const project = await db('project')
            .select('project_id', 'project_name', 'activity_type')
            .where('project_id', project_id)
            .first();
        
        return project;
    }

    async deleteProject(project_id) {
        const deletedCount = await db('project')
            .where('project_id', project_id)
            .del();
        
        
        return deletedCount;
    }
}

module.exports = ProjectDAO;
