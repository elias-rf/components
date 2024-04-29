import GrupoSujeito from '@/client/pages/sistema/permissoes/grupo-sujeito.jsx'
import { authStore } from '@/client/store/auth_store.mjs'

const meta = {
  component: GrupoSujeito,
}

export default meta

authStore.state.getState().currentUser.grupoIds = '0'

export const Default = {
  render: () => (
    <>
      <GrupoSujeito />
    </>
  ),
}
