import { database } from '@/utils/record/database.js'
import { describe, expect, test } from 'vitest'

describe('database', () => {
  test('ler dados', async () => {
    const db = await database()
    expect(db.agenda_telefone.get().length).toEqual(100)
  })
})
