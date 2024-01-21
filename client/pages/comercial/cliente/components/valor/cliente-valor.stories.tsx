import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteValor } from '@/client/pages/comercial/cliente/components/valor/cliente-valor.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
}

export default meta
type Story = StoryObj<typeof ClienteValor>

clienteStore.setSelection([['CdCliente', '1']])

export const Valor: Story = {
  render: () => {
    return <ClienteValor store={clienteStore} />
  },
}
