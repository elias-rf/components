import fetchMock from 'fetch-mock/esm/client'

import { fakerPT_BR as faker } from '@faker-js/faker'

const uid = (id = 0) => {
  // let id = 0
  return () => {
    return id++
  }
}

function createRecord(fake: any, qtd: number = 1) {
  const records = []
  for (let i = 0; i < qtd; i++) {
    const rec = {} as any
    for (const fld in fake) {
      if (typeof fake[fld] === 'function') {
        rec[fld] = fake[fld]()
      } else {
        rec[fld] = fake[fld]
      }
    }
    records.push(rec)
  }
  return records
}

const database = (method: string) => {
  switch (method) {
    case 'agendaTelefone/list':
      return createRecord(
        {
          id: uid(100),
          name: faker.person.fullName,
          department: faker.commerce.department,
          email: faker.internet.email,
        },
        50
      )
    case 'agendaTelefone/read':
      return createRecord(
        {
          id: uid(100),
          name: faker.person.fullName,
          department: faker.commerce.department,
          email: faker.internet.email,
        },
        1
      )[0]
    case 'cliente/read':
      return createRecord(
        {
          CdCliente: uid(1),
          RzSocial: faker.company.name,
          Cidade: faker.location.city,
          Uf: () => faker.location.state({ abbreviated: true }),
          CGC: faker.number.int,
          CdVendedor: faker.number.int,
          FgAtivo: () => 'S',
          Email: faker.internet.email,
          NumIdentidade: faker.number.int,
          DtCadastro: faker.date.past,
        },
        1
      )[0]
    case 'cliente/list':
      return createRecord(
        {
          CdCliente: uid(1),
          RzSocial: faker.company.name,
          Cidade: faker.location.city,
          Uf: () => faker.location.state({ abbreviated: true }),
          CGC: faker.number.int,
          CdVendedor: faker.number.int,
          FgAtivo: 'S',
          Email: faker.internet.email,
          NumIdentidade: faker.number.int,
          DtCadastro: faker.date.past,
        },
        50
      )
    case 'nfSaida/vendaDiario':
      return createRecord(
        {
          NmCategoria: () => faker.helpers.arrayElement(['LITEFLEX', 'ENLITE']),
          DtEmissao: () => faker.date.recent({ days: 50 }),
          quantidade: faker.number.int,
          valor: faker.number.int,
        },
        50
      )
    default:
      console.log(`método não encontrado:`, method)
      return null
  }
}

fetchMock.mock('*', (url, options: any) => {
  const body = JSON.parse(options.body) as {
    id: number
    method: string
    args: any
  }
  const result = database(body.method)
  console.log(
    'fetch:',
    JSON.stringify(
      {
        method: body.method,
        args: body.args,
      },
      null,
      2
    )
  )

  if (!result) {
    return false
  }

  return {
    id: body.id,
    result,
  }
})

export const fetcherMock = fetchMock
