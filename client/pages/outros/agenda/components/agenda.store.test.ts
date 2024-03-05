import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import { server } from '@/utils/mocks/core-msw/server.js'
import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest'

describe('useAgendaTelefone', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('fetchList', async () => {
    mockedFetch.clearHistory()
    const agenda = await agendaTelefoneStore.fetchList({
      where: agendaTelefoneStore.state.getState().where,
      orderBy: agendaTelefoneStore.state.getState().orderBy,
      select: ['*'],
    })
    expect(agenda.length).toEqual(3)
  })
  test('fetchRecord', async () => {
    mockedFetch.clearHistory()
    agendaTelefoneStore.state.getState().selection = [['id', 100]]
    const agenda = await agendaTelefoneStore.fetchRecord({
      selection: agendaTelefoneStore.state.getState().selection,
    })
    expect(agenda).toEqual({
      id: 100,
      nome: 'Brenda Gomes',
      setor: 'Comercial',
      email: 'brenda.gomes@visiontech.com.br',
    })
  })
  test('onSave', async () => {
    mockedFetch.clearHistory()
    expect(agendaTelefoneStore.state.getState().status).toEqual('none')
    await agendaTelefoneStore.onSave({
      id: '100',
      nome: 'Fulano da Silva',
      email: 'fulano@mail.com',
      setor: 'Setor de TI',
    })
    expect(agendaTelefoneStore.state.getState().status).toEqual('view')
  })
})
