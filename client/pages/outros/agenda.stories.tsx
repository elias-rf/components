import '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page'
import { StoreViewer } from '@/client/components/ui/store-viewer'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { Story } from '@ladle/react'
import Agenda from './agenda'

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
