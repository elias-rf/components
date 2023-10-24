import { createRecord, fetcherMock, uid } from '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page'
import { StoreViewer } from '@/client/components/ui/store-viewer'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table'
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
