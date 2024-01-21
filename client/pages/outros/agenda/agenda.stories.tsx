import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui-old/store-viewer.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda.store.js'
import { createRecord, uid } from '@/utils/mocks/fetcher-mock.js'
import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import Agenda from './agenda.js'

const meta: Meta<typeof Agenda> = {
  component: Agenda,
}

export default meta
type Story = StoryObj<typeof Agenda>

mockedFetch.reset()
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

export const Default: Story = {
  render: () => (
    <div className="h-[800px] w-full">
      <Page>
        <Agenda />

        <StoreViewer
          store={agendaTelefoneStore}
          properties={['list', 'orderBy', 'selection', 'where', 'record']}
        />
      </Page>
    </div>
  ),
}
