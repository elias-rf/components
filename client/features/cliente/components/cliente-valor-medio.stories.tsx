import { clienteStore } from '@/client/features/cliente/cliente_store.js'
import { ClienteValorMedio } from '@/client/features/cliente/components/cliente-valor-medio.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import { Story } from '@ladle/react'

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

export default {
  title: 'features/cliente/cliente-valor-medio',
  args: {
    id: 1,
  },
}

export const ValorMedio: Story = () => {
  return <ClienteValorMedio />
}
