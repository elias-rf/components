import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/components/agenda.form.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'
import { faker } from '@faker-js/faker/locale/pt_BR'
import type { Meta, StoryObj } from '@storybook/react'

mockedFetch.reset()
mockedFetch.add(async (request: any) => {
  const body = JSON.parse(request.options?.body)
  switch (body.method) {
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

const meta: Meta<typeof AgendaTelefoneForm> = {
  component: AgendaTelefoneForm,
}

export default meta
type Story = StoryObj<typeof AgendaTelefoneForm>

export const Form: Story = {
  render: () => {
    const selection = agendaTelefoneStore.state.use.selection()
    const status = agendaTelefoneStore.state.use.status()

    return (
      <>
        <AgendaTelefoneForm store={agendaTelefoneStore} />
        <JsonView
          data={{
            selection: selection,
            statue: status,
          }}
        />
      </>
    )
  },
}
