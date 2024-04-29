import { describe, expect, test } from 'vitest'
import { getIncludeData } from '../../../utils/orm/utils/get-include-data.mjs'

const schema = {
  database: 'test',
  table: 'test',
  primary: ['id'],
  relations: {
    esposa: {
      method: async () => (args) => {
        return args
      },
      where: [
        ['id', 'id_esposa'],
        ['nome', '=', 'nome'],
      ],
    },
  },
  fields: {
    id: {},
    nome: {},
    id_esposa: {},
  },
}

describe('getInclude', () => {
  test('include for read', async () => {
    const data = { id: 1, nome: 'Fulano', id_esposa: '10' }
    const include = {
      esposa: ['id', 'name'],
    }
    expect(await getIncludeData(data, include, schema)).toEqual({
      id: 1,
      id_esposa: '10',
      nome: 'Fulano',
      esposa: {
        select: ['id', 'name'],
        where: [
          ['id', '10'],
          ['nome', '=', 'Fulano'],
        ],
        include: {},
      },
    })
  })

  test('include for read select *', async () => {
    const data = { id: 1, nome: 'Fulano', id_esposa: '10' }
    const include = {
      esposa: ['*'],
    }
    expect(await getIncludeData(data, include, schema)).toEqual({
      id: 1,
      id_esposa: '10',
      nome: 'Fulano',
      esposa: {
        select: ['*'],
        where: [
          ['id', '10'],
          ['nome', '=', 'Fulano'],
        ],
        include: {},
      },
    })
  })

  test('include for list', async () => {
    const data = [
      { id: 1, nome: 'Fulano', id_esposa: '10' },
      { id: 2, nome: 'Cicrano', id_esposa: '20' },
    ]
    const include = {
      esposa: ['id', 'name'],
    }
    expect(await getIncludeData(data, include, schema)).toEqual([
      {
        id: 1,
        id_esposa: '10',
        nome: 'Fulano',
        esposa: {
          select: ['id', 'name'],
          where: [
            ['id', '10'],
            ['nome', '=', 'Fulano'],
          ],
          include: {},
        },
      },
      {
        id: 2,
        id_esposa: '20',
        nome: 'Cicrano',
        esposa: {
          select: ['id', 'name'],
          where: [
            ['id', '20'],
            ['nome', '=', 'Cicrano'],
          ],
          include: {},
        },
      },
    ])
  })
  test('include for list with filter', async () => {
    const data = [
      { id: 1, nome: 'Fulano', id_esposa: '10' },
      { id: 2, nome: 'Cicrano', id_esposa: '20' },
    ]
    const include = {
      esposa: ['id', 'name', ['idade', '<', 18]],
    }
    expect(await getIncludeData(data, include, schema)).toEqual([
      {
        id: 1,
        id_esposa: '10',
        nome: 'Fulano',
        esposa: {
          select: ['id', 'name', 'idade'],
          where: [
            ['id', '10'],
            ['nome', '=', 'Fulano'],
            ['idade', '<', 18],
          ],
          include: {},
        },
      },
      {
        id: 2,
        id_esposa: '20',
        nome: 'Cicrano',
        esposa: {
          select: ['id', 'name', 'idade'],
          where: [
            ['id', '20'],
            ['nome', '=', 'Cicrano'],
            ['idade', '<', 18],
          ],
          include: {},
        },
      },
    ])
  })

  test('include for list with undefined', async () => {
    const data = [{ id: 1, nome: 'Fulano' }]
    const include = {
      esposa: ['id', 'name', ['idade', '<', 18]],
    }
    expect(await getIncludeData(data, include, schema)).toEqual([
      {
        id: 1,
        nome: 'Fulano',
        esposa: {
          select: ['id', 'name', 'idade'],
          where: [
            ['id', 0],
            ['nome', '=', 'Fulano'],
            ['idade', '<', 18],
          ],
          include: {},
        },
      },
    ])
  })
})
