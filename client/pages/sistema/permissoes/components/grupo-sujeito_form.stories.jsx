import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { grupoSujeitoStore } from '@/client/pages/sistema/permissoes/components/grupo-sujeito.store.mjs'
import { GrupoSujeitoForm } from '@/client/pages/sistema/permissoes/components/grupo-sujeito_form.jsx'

const meta = {
  component: GrupoSujeitoForm,
}

export default meta

export const Form = {
  render: () => {
    const selection = grupoSujeitoStore.state.use.selection()
    const status = grupoSujeitoStore.state.use.status()
    return (
      <>
        <GrupoSujeitoForm store={grupoSujeitoStore} />
        <JsonView
          data={{
            selection: selection,
            statue: status,
          }}
        />
      </>
    )
  },
}
