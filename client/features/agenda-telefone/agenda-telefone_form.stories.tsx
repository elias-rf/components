import { fetcherMock } from '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page'
import { StoreViewer } from '@/client/components/ui/store-viewer'
import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import '@/client/index.css'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { Story } from '@ladle/react'
import { useEffectOnce } from 'usehooks-ts'

fetcherMock({
  'agendaTelefone/read': () => {
    return {
      id: 100,
      name: faker.person.fullName(),
      department: faker.commerce.department(),
      email: faker.internet.email(),
    }
  },
})

export default {
  title: 'features/agenda-telefone/agenda-telefone_form',
}

export const Form: Story = () => {
  const setSelection = agendaTelefoneStore.use.setSelection()
  const fetchRecord = agendaTelefoneStore.use.fetchRecord()

  useEffectOnce(() => {
    setSelection([['id', Date.now()]])
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
