import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import '@/client/index.css'
import { useState } from '@/client/lib/hooks/use-state.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/agenda_form.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda_store.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'
import { faker } from '@faker-js/faker/locale/pt_BR'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSnapshot } from 'valtio'

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
    const snap = useSnapshot(agendaTelefoneStore.state)

    React.useEffect(() => {
      agendaTelefoneStore.setSelection([['id', '100']])
      agendaTelefoneStore.fetchRecord()
    }, [])

    return (
      <Page>
        <AgendaTelefoneForm store={agendaTelefoneStore} />
        <JsonView
          data={{
            selection: snap.selection,
            statue: snap.status,
            record: snap.record,
          }}
        />
      </Page>
    )
  },
}
