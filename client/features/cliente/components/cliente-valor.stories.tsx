import { clienteStore } from '@/client/features/cliente/cliente_store.js'
import { ClienteValor } from '@/client/features/cliente/components/cliente-valor.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

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

export default {
  title: 'features/cliente/cliente-valor',
  args: {
    id: 1,
  },
}

export const Valor: Story = () => {
  return <ClienteValor />
}
