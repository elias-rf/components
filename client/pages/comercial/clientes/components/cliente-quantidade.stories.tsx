import { StoreViewer } from '@/client/components/ui-old/store-viewer.js'
import { ClienteQuantidade } from '@/client/pages/comercial/clientes/components/cliente-quantidade.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'cliente/vendaMensalQuantidade': () => {
    return [
      { categoria: 'produto 1', '2020-01': 10 },
      { categoria: 'produto 2', '2020-02': 20 },
    ]
  },
})

clienteStore.state.inicio = '2020-01-01'
clienteStore.state.fim = '2020-06-30'
clienteStore.state.selection = [['CdCliente', 1]]
clienteStore.fetchVendaMensalQuantidade()

const meta: Meta<typeof ClienteQuantidade> = {
  component: ClienteQuantidade,
}

export default meta
type Story = StoryObj<typeof ClienteQuantidade>

export const Quantidade: Story = {
  render: () => {
    return (
      <>
        <ClienteQuantidade />
        <StoreViewer store={clienteStore} />
      </>
    )
  },
}
