import fetchMock from 'fetch-mock/esm/client'

import { fakerPT_BR as faker } from '@faker-js/faker'

export const uid = (id = 0) => {
  return () => {
    return id++
  }
}

export function createRecord(fake: any, qtd: number = 1) {
  const records = []
  for (let i = 0; i < qtd; i++) {
    const rec = {} as any
    for (const fld in fake) {
      if (typeof fake[fld] === 'function') {
        rec[fld] = fake[fld](i)
      } else {
        rec[fld] = fake[fld]
      }
    }
    records.push(rec)
  }
  return records
}

const database = {
  'usuario/login': (args: any) => {
    return {
      usuario_id: 1,
      nome_login: args[0].user,
      nome: 'FULANO',
      group_ids: '42,20,0',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    }
  },

  'nfSaida/vendaDiario': () => {
    return createRecord(
      {
        NmCategoria: () => faker.helpers.arrayElement(['LITEFLEX', 'ENLITE']),
        DtEmissao: () => faker.date.recent({ days: 50 }),
        quantidade: faker.number.int,
        valor: faker.number.int,
      },
      50
    )
  },
}

export const tracker = fetchMock

export function fetcherMock(api: { [method: string]: (arg: any) => any }) {
  fetchMock.mock(
    (url, options: any) => {
      const body = JSON.parse(options.body) as {
        id: number
        method: string
        args: any
      }
      if (Object.hasOwn(api, body.method)) {
        console.log(body.method, 'ok')
        return true
      }
      console.log(
        'fetch não encontrado:',
        JSON.stringify(
          {
            method: body.method,
            args: body.args,
          },
          null,
          2
        )
      )
      return false
    },
    (_url: string, options: any) => {
      const body = JSON.parse(options.body) as {
        id: number
        method: string
        args: any
      }
      const result = api[body.method](body.args)
      return {
        id: body.id,
        result,
      }
    }
  )
}

// fetcherMock(database)
