/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      user: 'postgres',
      host: 'localhost',
      database: 'timesheet',
      password: 'P@ssw0rd',
      port: 5432
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory: './seeds'
    }
    
  },

  production: {
    client: 'mssql',
    connection: {
      server: 'your_production_server',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
