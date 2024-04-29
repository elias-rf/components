import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'
import { ClienteValorMedio } from '@/client/pages/comercial/cliente/components/valor-medio/cliente-valor-medio.jsx'

const meta = {
  component: ClienteValorMedio,
}

export default meta

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const ValorMedio = {
  render: () => {
    return (
      <>
        <ClienteValorMedio store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
