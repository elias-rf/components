import '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page'
import { StoreViewer } from '@/client/components/ui/store-viewer'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { ClienteTable } from '@/client/features/cliente/cliente_table'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente Table',
}

export const Default: Story = () => {
  return (
    <div className="w-full h-[800px]">
      <Page>
        <ClienteTable />
        <StoreViewer
          store={clienteStore}
          properties={['list', 'orderBy', 'selection', 'where', 'record']}
        />
      </Page>
    </div>
  )
}
