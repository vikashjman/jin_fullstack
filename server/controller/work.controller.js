const WorkService = require('../service/work.service');

class WorkController {

    async getAllWork(req, res) {
        try {
            const data = await WorkService.getAllWork();
            return res.status(201).json({ bauRows: data.bauRows, salesRows: data.salesRows })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async createWork(req, res) {
        try {
            const data = await WorkService.createWork(req.body);
            return res.status(201).json({ work: data })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async clearAndSave(req, res) {
        try {
            const message = await WorkService.clearAndSave(req.body.payload);
            return res.status(201).json({ message });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async clear(req, res) {
        try {
            const message = await WorkService.clear();
            return res.status(201).json({ message });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new WorkController();