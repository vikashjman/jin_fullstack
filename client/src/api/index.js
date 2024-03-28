import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api/' })



export const getProjects = async () => {
    const url = `/projects`;
    const response = await API.get(url);
    const projects = response.data.projects;

    const salesProjects = projects.filter(project => project.activity_type === "SALES");
    const bauProjects = projects.filter(project => project.activity_type === "BAU");
    return { salesProjects, bauProjects }
}

export const getTasksByProjectID = async (project_id) => {
    const url = `/tasks/projects/${project_id}`;
    const response = await API.get(url);
    return response.data.tasks;
}

export const getAllWorks = async () => {
    const url = `/works`;
    const response = await API.get(url);
    return response.data;
}

export const saveWorks = async (works) => {
    const url = `/works/save`;
    // works = {bauRows:[], salesRows:[]}
    const response = await API.post(url, { payload: works });
    return response.data;
}

export const clearWorks = async () => {
    const url = `/works`;
    const response = await API.delete(url);
    return response.data;
}

export const getAllTasks = async () => {
    const url = '/tasks';
    const response = await API.get(url);
    return response.data.tasks;
}


