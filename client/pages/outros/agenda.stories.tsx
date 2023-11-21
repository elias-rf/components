import { createRecord, uid } from '@/mocks/fetcher-mock.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'
import { fakerPT_BR as faker } from '@faker-js/faker'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store.js'
import { Story } from '@ladle/react'
import Agenda from './agenda.js'

mockedFetch.clear()
mockedFetch.add(async (request: any) => {
  faker.seed(1)
  const body = JSON.parse(request.options?.body)
  switch (body.method) {
    case 'agendaTelefone/list':
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
            20
          ),
        },
      }
    case 'agendaTelefone/read':
      return {
        body: {
          id: body.id,
          result: {
            id: 100,
            name: faker.person.fullName(),
            department: faker.commerce.department(),
            email: faker.internet.email(),
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

export default {
  title: 'pages/outros/agenda',
}

export const Default: Story = () => (
  <div className="w-full h-[800px]">
    <Page>
      <Agenda />

      <StoreViewer
        store={agendaTelefoneStore}
        properties={['list', 'orderBy', 'selection', 'where', 'record']}
      />
    </Page>
  </div>
)
