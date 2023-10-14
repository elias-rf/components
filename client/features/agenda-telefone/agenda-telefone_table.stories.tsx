import '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page'
import { StoreViewer } from '@/client/components/ui/store-viewer'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table'
import type { Story } from '@ladle/react'

export default {
  title: 'features/agenda-telefone/agenda telefone table',
}

export const Default: Story = () => {
  return (
    <div className="w-full h-[800px]">
      <Page>
        <AgendaTelefoneTable />
        <StoreViewer
          store={agendaTelefoneStore}
          properties={['list', 'orderBy', 'selection', 'where', 'record']}
        />
      </Page>
    </div>
  )
}
