const knex = require('knex');
const knexfile = require('./knexfile');

// TODO in prod, use dependency injection
// to create knex instance so db access can be mocked
// for tests


// TODO in prod don't access knexfile.developement directly
// but decide with env vars
const db = knex(knexfile.development);
module.exports = db;