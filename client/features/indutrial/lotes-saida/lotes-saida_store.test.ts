import { createRecord, fetcherMock, uid } from '@/mocks/fetcher-mock.js'

import { agendaTelefoneStore } from '@/client/features/outros/agenda-telefone/agenda-telefone_store.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, test } from 'vitest'

fetcherMock({
  agendaTelefone_list: () => {
    return createRecord(
      {
        id: uid(100),
        name: faker.person.fullName,
        department: faker.commerce.department,
        email: faker.internet.email,
      },
      50
    )
  },
  agendaTelefone_read: () => ({
    id: '100',
    name: 'Fulano da Silva',
    department: 'Setor de TI',
    email: 'fulano@mail.com',
  }),
})

describe('useAgendaTelefone', () => {
  test('fetchList', async () => {
    const agenda = await agendaTelefoneStore.getState().fetchList()
    expect(agenda.length).toEqual(50)
  })
  test('fetchRecord', async () => {
    agendaTelefoneStore.setState({
      selection: [['id', 100]],
    })
    const agenda = await agendaTelefoneStore.getState().fetchRecord()
    expect(agenda).toEqual({
      id: '100',
      name: 'Fulano da Silva',
      department: 'Setor de TI',
      email: 'fulano@mail.com',
    })
  })
  test('onSave', async () => {
    expect(agendaTelefoneStore.getState().status).toEqual('none')
    await agendaTelefoneStore.getState().onSave()
    expect(agendaTelefoneStore.getState().status).toEqual('view')
    expect(agendaTelefoneStore.getState().list.length).toEqual(50)
  })
})
