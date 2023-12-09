import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { clienteStore } from '@/client/features/comercial/cliente/cliente_store.js'
import { ClienteQuantidade } from '@/client/features/comercial/cliente/components/cliente-quantidade.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import { Story } from '@ladle/react'

fetcherMock({
  'cliente/vendaMensalQuantidade': () => {
    return [
      { categoria: 'produto 1', '2020-01': 10 },
      { categoria: 'produto 2', '2020-02': 20 },
    ]
  },
})

clienteStore.setState(() => ({
  inicio: '2020-01-01',
  fim: '2020-06-30',
  selection: [['CdCliente', 1]],
}))
clienteStore.getState().fetchVendaMensalQuantidade()

export default {
  title: 'features/cliente/cliente-quantidade',
}

export const Quantidade: Story = () => {
  return (
    <>
      <ClienteQuantidade />
      <StoreViewer store={clienteStore} />
    </>
  )
}
