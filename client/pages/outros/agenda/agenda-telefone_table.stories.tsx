import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/agenda-telefone_table.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'
import { faker } from '@faker-js/faker/locale/pt_BR'
import { useHookstate } from '@hookstate/core'
import { logged } from '@hookstate/logged'
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
    const { list, selection, status, orderBy, where } = useHookstate(
      agendaTelefoneStore.state
    )

    return (
      <div className="h-[800px] w-full">
        <Page>
          <AgendaTelefoneTable store={agendaTelefoneStore} />
          <JsonView
            data={{
              where: where.value,
              orderBy: orderBy.value,
              selection: selection.value,
              status: status.value,
              list: list.value,
            }}
          />
        </Page>
      </div>
    )
  },
}
