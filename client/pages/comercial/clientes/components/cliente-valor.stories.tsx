import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteValor } from '@/client/pages/comercial/clientes/components/cliente-valor.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'cliente/vendaMensalValor': () => {
    return [
      { categoria: 'produto 1', '2020-01': '1.000,10' },
      { categoria: 'produto 2', '2020-02': '2.000,20' },
    ]
  },
})

clienteStore.setState(() => ({
  inicio: '2020-01-01',
  fim: '2020-06-30',
  selection: [['CdCliente', 1]],
}))
clienteStore.getState().fetchVendaMensalValor()

const meta: Meta<typeof ClienteValor> = {
  component: ClienteValor,
}

export default meta
type Story = StoryObj<typeof ClienteValor>

export const Valor: Story = {
  render: () => {
    return <ClienteValor />
  },
}
