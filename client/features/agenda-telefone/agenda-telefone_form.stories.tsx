import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form.js'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store.js'
import '@/client/index.css'
import { faker } from '@faker-js/faker/locale/pt_BR'
import type { Story } from '@ladle/react'
import { useEffectOnce } from 'usehooks-ts'

mockedFetch.clear()
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

export default {
  title: 'features/agenda-telefone/agenda-telefone_form',
}

export const Form: Story = () => {
  const setSelection = agendaTelefoneStore.use.setSelection()
  const fetchRecord = agendaTelefoneStore.use.fetchRecord()

  useEffectOnce(() => {
    setSelection([['id', '100']])
    fetchRecord()
  })

  return (
    <Page>
      <AgendaTelefoneForm />
      <StoreViewer
        store={agendaTelefoneStore}
        properties={['list', 'orderBy', 'selection', 'where', 'record']}
      />
    </Page>
  )
}
