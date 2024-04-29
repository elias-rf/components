import { Knex } from 'knex'

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  await knex('group_subject').del()

  // Inserts seed entries
  await knex('group_subject').insert([
    { id_group: 1, id_subject: 'read' },
    { id_group: 2, id_subject: 'read' },
    { id_group: 2, id_subject: 'write' },
    { id_group: 3, id_subject: 'read' },
  ])
}
