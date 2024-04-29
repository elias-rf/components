import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'
import { authStore } from '@/client/store/auth_store.mjs'
import Cliente from './cliente.jsx'

const meta = {
  component: Cliente,
}

export default meta

authStore.state.getState().currentUser.grupoIds = '0'

export const Default = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <>
        <Cliente />
        <JsonView data={state} />
      </>
    )
  },
}
