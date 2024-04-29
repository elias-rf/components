import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'
import { ClienteQuantidade } from '@/client/pages/comercial/cliente/components/quantidade/cliente-quantidade.jsx'

const meta = {
  component: ClienteQuantidade,
}

export default meta

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const Quantidade = {
  render: () => {
    return (
      <>
        <ClienteQuantidade store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
