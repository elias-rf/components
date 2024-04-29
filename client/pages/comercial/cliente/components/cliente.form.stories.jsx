import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { ClienteForm } from '@/client/pages/comercial/cliente/components/cliente.form.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'

const meta = {
  component: ClienteForm,
}

export default meta

if (clienteStore.state.getState().selection.length === 0)
  clienteStore.setSelection([['id', '100']])

export const Form = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <>
        <ClienteForm store={clienteStore} />
        <JsonView data={state} />
      </>
    )
  },
}
