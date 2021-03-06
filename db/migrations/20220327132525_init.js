/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('order_id');
        table.integer('table_number').notNullable();
        table.string('food').notNullable();
        table.integer('time_to_cook').notNullable();
        table.boolean('cooked');
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
