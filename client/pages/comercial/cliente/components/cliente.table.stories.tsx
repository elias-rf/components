import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteTable } from '@/client/pages/comercial/cliente/components/cliente.table.js'
import '@/utils/mocks/core.mock.js'
import '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteTable> = {
  component: ClienteTable,
}

export default meta
type Story = StoryObj<typeof ClienteTable>

clienteStore.setOrderBy([['CdCliente', 'desc']])

export const Table: Story = {
  render: () => {
    return (
      <div className="h-[800px] w-full">
        <Page>
          <ClienteTable store={clienteStore} />
          <JsonView data={clienteStore} />
        </Page>
      </div>
    )
  },
}
