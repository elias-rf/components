import { db } from '@/utils/record/database-mock.js'
import { describe, expect, test } from 'vitest'

describe('database', () => {
  test('ler dados', async () => {
    expect((await db.from('agenda_telefone')).length).toEqual(100)
  })
})
