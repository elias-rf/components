import { createRecord, fetcherMock, uid } from '@/mocks/fetcher-mock.js'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store.js'
import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { Story } from '@ladle/react'

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

export default {
  title: 'features/lotes-saida/ lotes-saida table',
}

export const Default: Story = () => {
  return (
    <div className="w-full h-[800px]">
      <Page>
        <AgendaTelefoneTable />
        <StoreViewer
          store={agendaTelefoneStore}
          properties={['list', 'orderBy', 'selection', 'where', 'record']}
        />
      </Page>
    </div>
  )
}
