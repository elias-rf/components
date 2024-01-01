import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteValorMedio } from '@/client/pages/comercial/clientes/components/cliente-valor-medio.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'cliente/vendaMensalValorMedio': [
    { categoria: 'produto 1', '2020-01': '10,10' },
    { categoria: 'produto 2', '2020-02': '20,20' },
  ],
})

clienteStore.setState(() => ({
  inicio: '2020-01-01',
  fim: '2020-06-30',
  selection: [['CdCliente', 1]],
}))
clienteStore.getState().fetchVendaMensalValorMedio()

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
