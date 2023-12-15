import { createRecord, uid } from '@/mocks/fetcher-mock.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/agenda-telefone_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { db } from '@/utils/record/database-mock.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { Story } from '@ladle/react'

mockedFetch.clear()
mockedFetch.add(async (request: any) => {
  const body = JSON.parse(request.options?.body)

  switch (body.method) {
    case 'agendaTelefone/list':
      return {
        body: {
          id: body.id,
          result: await db
            .from('agenda_telefone')
            .where(body.args[0].where)
            .orderBy(body.args[0].orderBy),
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

export default {
  title: 'features/agenda-telefone/file manager',
}

export const Default: Story = () => {
  return (
    <div className="h-[800px] w-full">
      <Page>
        <AgendaTelefoneTable
          store={agendaTelefoneStore}
          auth={authStore}
        />
        <StoreViewer
          store={agendaTelefoneStore}
          properties={['orderBy', 'selection', 'where', 'record', 'list']}
          className="text-xs"
        />
      </Page>
    </div>
  )
}
