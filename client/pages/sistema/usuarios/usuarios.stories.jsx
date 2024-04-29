import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { authStore } from '@/client/store/auth_store.mjs'
import { usuarioStore } from './components/usuario.store.mjs'
import Usuarios from './usuarios.jsx'

const meta = {
  component: Usuarios,
}

export default meta

authStore.state.getState().currentUser.grupoIds = '0'

export const Default = {
  render: () => {
    const state = usuarioStore.state((state) => state)
    return (
      <>
        <Usuarios />
        <JsonView data={state} />
      </>
    )
  },
}
