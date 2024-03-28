const projectService = require("../service/project.service");

class ProjectController {
    async createProject(req, res) {
        try {
            const data = await projectService.createProject(req.body);
            return res.status(201).json({ data });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }

    async getAllProjects(req, res) {
        try {
            const projects = await projectService.getAllProjects();
            return res.status(200).json({ projects });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }

    async getProject(req, res) {
        const { project_id } = req.params;
        try {
            const project = await projectService.getProject(project_id);
            if (!project) {
                return res.status(404).json({ error: "Project not found" });
            }
            return res.status(200).json({ project });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }

    async deleteProject(req, res) {
        const { project_id } = req.params;
        try {
            const count = await projectService.deleteProject(project_id);
            return res.status(204).json({ deleteCount: count });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
}

module.exports = new ProjectController();
