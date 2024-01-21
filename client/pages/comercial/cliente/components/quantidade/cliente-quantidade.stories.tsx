import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteQuantidade } from '@/client/pages/comercial/cliente/components/quantidade/cliente-quantidade.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
}

export default meta
type Story = StoryObj<typeof ClienteQuantidade>

clienteStore.setSelection([['CdCliente', '1']])

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
