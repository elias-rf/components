import { JsonView } from '@/client/components/json-view/json-view.js'
import { ClienteForm } from '@/client/pages/comercial/cliente/components/cliente.form.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteForm> = {
  component: ClienteForm,
}

export default meta
type Story = StoryObj<typeof ClienteForm>

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['CdCliente', '100']])

export const Form: Story = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <>
        <ClienteForm store={clienteStore} />
        <JsonView data={state} />
      </>
    )
  },
}
