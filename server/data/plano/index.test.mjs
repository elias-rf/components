import { describe, expect, it } from 'vitest'
import { oftalmoDataSource } from '../oftalmo/index.mjs'

describe('oftalmo', () => {
  it('phonebook', () => {
    expect(oftalmoDataSource.agendaTelefone).toBeDefined()
    expect(Object.keys(oftalmoDataSource.agendaTelefone)).toEqual([
      'orm',
      'count',
      'create',
      'del',
      'increment',
      'list',
      'read',
      'update',
    ])
  })
})
