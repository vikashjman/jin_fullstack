const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'timesheet',
    password: 'P@ssw0rd',
    port: '5432'
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error executing query', err);
    } else {
        console.log('Connected to PostgreSQL:', res.rows[0].now);
    }
    pool.end();
});
