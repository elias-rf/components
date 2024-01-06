import { ClienteValorMedio } from '@/client/pages/comercial/clientes/components/cliente-valor-medio.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'cliente/vendaMensalValorMedio': [
    { categoria: 'produto 1', '2020-01': '10,10' },
    { categoria: 'produto 2', '2020-02': '20,20' },
  ],
})

clienteStore.state.inicio = '2020-01-01'
clienteStore.state.fim = '2020-06-30'
clienteStore.state.selection = [['CdCliente', 1]]
clienteStore.fetchVendaMensalValorMedio()

const meta: Meta<typeof ClienteValorMedio> = {
  component: ClienteValorMedio,
}

export default meta
type Story = StoryObj<typeof ClienteValorMedio>

export const ValorMedio: Story = {
  render: () => {
    return <ClienteValorMedio />
  },
}
