import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'
import { ClienteValor } from '@/client/pages/comercial/cliente/components/valor/cliente-valor.jsx'

const meta = {
  component: ClienteValor,
}

export default meta

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const Valor = {
  render: () => {
    return (
      <>
        <ClienteValor store={clienteStore} />
        <JsonView data={clienteStore.state} />
      </>
    )
  },
}
