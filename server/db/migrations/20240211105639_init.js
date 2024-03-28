exports.up = function(knex) {
    return knex.schema
      .createTable('project', table => {
        table.increments('project_id').primary();
        table.string('project_name').notNullable().unique();
        table.enum('activity_type', ['BAU', 'SALES']).notNullable();
      })
      .createTable('task', table => {
        table.increments('task_id').primary();
        table.string('task_name').notNullable().unique();
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('project.project_id');
      })
      .createTable('work', table => {
        table.string('work_id').primary();
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('project.project_id');
        table.integer('task_id').unsigned();
        table.foreign('task_id').references('task.task_id');
        table.string('comment');
        table.string('mon');
        table.string('tue');
        table.string('wed');
        table.string('thrus');
        table.string('fri');
        table.string('sat');
        table.string('sun');
        table.enum('activity_type', ['BAU', 'SALES']).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('work')
      .dropTableIfExists('task')
      .dropTableIfExists('project');
  };
  