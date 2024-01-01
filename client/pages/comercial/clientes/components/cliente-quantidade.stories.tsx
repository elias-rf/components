import { StoreViewer } from '@/client/components/ui-old/store-viewer.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteQuantidade } from '@/client/pages/comercial/clientes/components/cliente-quantidade.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

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
