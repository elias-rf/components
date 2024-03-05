import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { ClienteValor } from '@/client/pages/comercial/cliente/components/valor/cliente-valor.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
}

export default meta
type Story = StoryObj<typeof ClienteValor>

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const Valor: Story = {
  render: () => {
    return (
      <>
        <ClienteValor store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
