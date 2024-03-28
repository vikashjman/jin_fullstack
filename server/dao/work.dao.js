const db = require('../db/db');

class WorkDAO {
    async createWork(work) {
        const work_data = await db('work').insert(work).returning('*');
        return work_data;
    }

    async clearAndSave(works) {
        await db('work').truncate();
        await db('work').insert(works);
        return "Saved Successfully!";
    }

    async clear() {
        await db('work').truncate();
        return "Deleted Successfully!";
    }

    async getAllWork() {
        // Fetch all work rows grouped by activity_type
        const workRows = await db('work').select('*');
        
        // Separate work rows into BAU and SALES
        const bauRows = workRows.filter(row => row.activity_type === 'BAU');
        const salesRows = workRows.filter(row => row.activity_type === 'SALES');

        return { bauRows, salesRows };
    }
}

module.exports = WorkDAO;
