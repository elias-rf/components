import { createRecord, uid } from '@/mocks/fetcher-mock.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, test } from 'vitest'

mockedFetch.reset()
mockedFetch.add(async (request: any) => {
  const body = JSON.parse(request.options?.body)
  switch (body.method) {
    case 'agendaTelefone_list':
      return {
        body: {
          id: body.id,
          result: createRecord(
            {
              id: uid(100),
              name: faker.person.fullName,
              department: faker.commerce.department,
              email: faker.internet.email,
            },
            5
          ),
        },
      }
    case 'agendaTelefone_read':
      return {
        body: {
          id: body.id,
          result: {
            id: '100',
            name: 'Fulano da Silva',
            department: 'Setor de TI',
            email: 'fulano@mail.com',
          },
        },
      }
    default:
      return {
        body: {
          id: body.id,
          result: [],
        },
      }
  }
})

describe('useAgendaTelefone', () => {
  test('fetchList', async () => {
    mockedFetch.clearHistory()
    const agenda = await agendaTelefoneStore.fetchList()
    expect(agenda.length).toEqual(5)
    expect(mockedFetch.history().length).toEqual(1)
    expect(mockedFetch.history()[0].request).toEqual({
      options: {
        body: '{"jsonrpc":"2.0","id":1,"method":"agendaTelefone_list","params":{"where":[],"orderBy":[["id","asc"]]}}',
        headers: {
          Authorization: 'Bearer ',
          'content-type': 'application/json',
          user: '',
        },
        method: 'POST',
      },
      url: 'http://localhost:3333/api/rpc2',
    })
  })
  test('fetchRecord', async () => {
    mockedFetch.clearHistory()
    agendaTelefoneStore.state.selection = [['id', 100]]
    const agenda = await agendaTelefoneStore.fetchRecord()
    expect(agenda).toEqual({
      id: '100',
      name: 'Fulano da Silva',
      department: 'Setor de TI',
      email: 'fulano@mail.com',
    })
    expect(mockedFetch.history().length).toEqual(1)
    expect(mockedFetch.history()[0].request).toEqual({
      options: {
        body: '{"jsonrpc":"2.0","id":2,"method":"agendaTelefone_read","params":{"where":[["id",100]]}}',
        headers: {
          Authorization: 'Bearer ',
          'content-type': 'application/json',
          user: '',
        },
        method: 'POST',
      },
      url: 'http://localhost:3333/api/rpc2',
    })
  })
  test('onSave', async () => {
    mockedFetch.clearHistory()
    expect(agendaTelefoneStore.state.status).toEqual('none')
    await agendaTelefoneStore.onSave()
    expect(agendaTelefoneStore.state.status).toEqual('view')
    expect(agendaTelefoneStore.state.list.length).toEqual(5)
  })
})
