import type { Knex } from "knex";



export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meal_info', (table)=> {
    table.uuid('id').unique()
    table.text('meal_name').primary()
    table.text('meal_description').notNullable()
    table.timestamp('meal_created_at').defaultTo(knex.fn.now()).notNullable()
    table.text('meal_diet').notNullable()
    table.integer('user_id').unsigned() 

    table
    .foreign('user_id')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
  
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meal_info')
   }