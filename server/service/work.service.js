const WorkDAO = require('../dao/work.dao')
class WorkService {
    constructor() {
        this.workDAO = new WorkDAO();
    }

    async createWork(workDto) {
        const { work_id, project_id, task_id, comment, mon, tue, wed, thrus, fri, sat, sun, activity_type } = workDto;
        await this.workDAO.createWork(workDto);
    }

    async clearAndSave(workDto) {
        let { bauRows, salesRows } = workDto;
        let works = [...bauRows, ...salesRows];
        return await this.workDAO.clearAndSave(works);
    }

    async clear() {
        return await this.workDAO.clear();
    }

    async getAllWork(){
        return this.workDAO.getAllWork();
    }
}

module.exports = new WorkService();