import '@/mocks/fetcher-mock'

import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { describe, expect, test } from 'vitest'

describe('useAgendaTelefone', () => {
  test('fetchList', async () => {
    const agenda = await agendaTelefoneStore.getState().fetchList()
    expect(agenda.length).toEqual(50)
  })
})
