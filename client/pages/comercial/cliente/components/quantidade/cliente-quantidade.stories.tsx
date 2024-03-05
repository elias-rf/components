import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { ClienteQuantidade } from '@/client/pages/comercial/cliente/components/quantidade/cliente-quantidade.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
}

export default meta
type Story = StoryObj<typeof ClienteQuantidade>

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const Quantidade: Story = {
  render: () => {
    return (
      <>
        <ClienteQuantidade store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
