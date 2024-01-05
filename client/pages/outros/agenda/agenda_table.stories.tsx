import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/agenda_table.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda_store.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'
import { faker } from '@faker-js/faker/locale/pt_BR'
import type { Meta, StoryObj } from '@storybook/react'
import { useSnapshot } from 'valtio'

mockedFetch.reset()
mockedFetch.add(async (request: any) => {
  const body = JSON.parse(request.options?.body)
  console.log(body)
  switch (body.method) {
    case 'agendaTelefone_list':
      return {
        body: {
          id: body.id,
          result: [
            {
              id: 100,
              name: faker.person.fullName(),
              department: faker.commerce.department(),
              email: faker.internet.email(),
            },
            {
              id: 101,
              name: faker.person.fullName(),
              department: faker.commerce.department(),
              email: faker.internet.email(),
            },
            {
              id: 102,
              name: faker.person.fullName(),
              department: faker.commerce.department(),
              email: faker.internet.email(),
            },
          ],
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

const meta: Meta<typeof AgendaTelefoneTable> = {
  component: AgendaTelefoneTable,
}

export default meta
type Story = StoryObj<typeof AgendaTelefoneTable>

export const Default: Story = {
  render: () => {
    const snap = useSnapshot(agendaTelefoneStore.state)

    return (
      <div className="h-[800px] w-full">
        <Page>
          <AgendaTelefoneTable store={agendaTelefoneStore} />
          <JsonView
            data={{
              where: snap.where,
              orderBy: snap.orderBy,
              selection: snap.selection,
              status: snap.status,
              list: snap.list,
            }}
          />
        </Page>
      </div>
    )
  },
}
