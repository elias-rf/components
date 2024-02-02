import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/components/agenda.table.js'
import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'
import { faker } from '@faker-js/faker/locale/pt_BR'
import type { Meta, StoryObj } from '@storybook/react'

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
    const where = agendaTelefoneStore.state((state) => state.where)
    const orderBy = agendaTelefoneStore.state((state) => state.orderBy)
    const selection = agendaTelefoneStore.state((state) => state.selection)
    const status = agendaTelefoneStore.state((state) => state.status)

    return (
      <div className="h-[800px] w-full">
        <Page>
          <AgendaTelefoneTable store={agendaTelefoneStore} />
          <JsonView
            data={{
              where: where,
              orderBy: orderBy,
              selection: selection,
              status: status,
            }}
          />
        </Page>
      </div>
    )
  },
}
