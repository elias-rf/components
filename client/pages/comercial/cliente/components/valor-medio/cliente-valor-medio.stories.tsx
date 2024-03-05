import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { ClienteValorMedio } from '@/client/pages/comercial/cliente/components/valor-medio/cliente-valor-medio.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteValorMedio> = {
  component: ClienteValorMedio,
}

export default meta
type Story = StoryObj<typeof ClienteValorMedio>

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const ValorMedio: Story = {
  render: () => {
    return (
      <>
        <ClienteValorMedio store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
