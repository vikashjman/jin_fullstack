const projects = require('./data/projects');
const tasks = require('./data/tasks');

exports.seed = async (knex) => {
    try {
        // Deletes ALL existing entries from tasks table
        await knex('task').del();

        // Insert seed entries into projects table
        await knex('project').insert(projects);

        // Insert seed entries into tasks table
        await knex('task').insert(tasks);

        console.log('Seed completed successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error; // Rethrow the error to terminate the process
    }
};
