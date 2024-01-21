import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteForm } from '@/client/pages/comercial/cliente/components/cliente.form.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteForm> = {
  component: ClienteForm,
}

export default meta
type Story = StoryObj<typeof ClienteForm>

clienteStore.setSelection([['CdCliente', '2']])

export const Form: Story = {
  render: () => {
    return <ClienteForm store={clienteStore} />
  },
}
