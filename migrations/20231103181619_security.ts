import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('group', (table) => {
      table.integer('id_group')
      table.string('name', 30)
      table.primary(['id_group'])
    })
    .createTable('group_subject', (table) => {
      table.integer('id_group')
      table.string('id_subject', 30)
      table.primary(['id_group', 'id_subject'])
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('group')
    .dropTableIfExists('group_subject')
}
