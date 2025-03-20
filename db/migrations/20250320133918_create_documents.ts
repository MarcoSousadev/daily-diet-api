import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table)=> {
    table.uuid('user_id').primary().unique()
    table.text('user_name').notNullable()
    table.text('user_email').notNullable().unique()
  
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}

