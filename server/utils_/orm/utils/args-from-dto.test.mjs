import { describe, expect, test } from 'vitest'
import { argsFromDto } from './args-from-dto.mjs'

describe('argsFromDto', () => {
  const fields = {
    id: 'id',
    nome: 'name',
    setor: 'department',
    email: 'email',
  }

  test('data', async () => {
    const args = {
      data: { id: 1, nome: 'teste' },
    }

    const response = argsFromDto(args, fields)
    expect(response).toEqual({
      data: { id: 1, name: 'teste' },
    })
  })

  test('select', async () => {
    const args = {
      select: ['id', 'nome'],
    }

    const response = argsFromDto(args, fields)
    expect(response).toEqual({
      select: ['id', 'name'],
    })
  })
  test('where', async () => {
    const args = {
      where: [
        ['id', '=', 1],
        ['nome', '=', 'Fulano'],
      ],
    }

    const response = argsFromDto(args, fields)
    expect(response).toEqual({
      where: [
        ['id', '=', 1],
        ['name', '=', 'Fulano'],
      ],
    })
  })

  test('orderBy', async () => {
    const args = {
      orderBy: [
        ['id', 'desc'],
        ['nome', 'asc'],
      ],
    }

    const response = argsFromDto(args, fields)
    expect(response).toEqual({
      orderBy: [
        ['id', 'desc'],
        ['name', 'asc'],
      ],
    })
  })
})
