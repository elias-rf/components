import { createRecord, fetcherMock, uid } from '@/mocks/fetcher-mock'

import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, test } from 'vitest'

fetcherMock({
  'agendaTelefone/list': () => {
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
})

describe('useAgendaTelefone', () => {
  test('fetchList', async () => {
    const agenda = await agendaTelefoneStore.getState().fetchList()
    expect(agenda.length).toEqual(50)
  })
})
