import { JsonView } from '@/client/components/json-view/json-view.js'
import { Page } from '@/client/components/page/page.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { ClienteTable } from '@/client/pages/comercial/cliente/components/cliente.table.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteTable> = {
  component: ClienteTable,
}

export default meta
type Story = StoryObj<typeof ClienteTable>

clienteStore.setOrderBy([['id', 'desc']])

export const Table: Story = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <div className="h-[800px] w-full">
        <Page>
          <ClienteTable store={clienteStore} />
          <JsonView data={state} />
        </Page>
      </div>
    )
  },
}
