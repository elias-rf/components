import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteValorMedio } from '@/client/pages/comercial/cliente/components/valor-medio/cliente-valor-medio.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ClienteValorMedio> = {
  component: ClienteValorMedio,
}

export default meta
type Story = StoryObj<typeof ClienteValorMedio>

clienteStore.setSelection([['CdCliente', '1']])

export const ValorMedio: Story = {
  render: () => {
    return <ClienteValorMedio store={clienteStore} />
  },
}
