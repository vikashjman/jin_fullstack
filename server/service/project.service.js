const ProjectDAO = require('../dao/project.dao'); // Assuming ProjectDAO is exported as a class

class ProjectService {
    constructor() {
        this.projectDAO = new ProjectDAO(); // Instantiate ProjectDAO
    }

    async createProject(projectDto) {
        const { project_name, activity_type } = projectDto;
        return await this.projectDAO.createProject(project_name, activity_type); // Use the instance of ProjectDAO
    }

    async getAllProjects() {
        return await this.projectDAO.getAllProjects();
    }

    async getProject(project_id) {
        return await this.projectDAO.getProject(project_id);
    }

    async deleteProject(project_id) {
        return await this.projectDAO.deleteProject(project_id);
    }
}

module.exports = new ProjectService();
