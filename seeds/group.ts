import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('group').del()

  // Inserts seed entries
  await knex('group').insert([
    { id_group: 1, name: 'vendedor' },
    { id_group: 2, name: 'gerente' },
    { id_group: 3, name: 'estoquista' },
  ])
}
