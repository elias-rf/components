import { JsonView } from '@/client/components/json-view/json-view.js'
import { grupoSujeitoStore } from '@/client/pages/sistema/permissoes/components/group-subject.store.js'
import { GrupoSujeitoForm } from '@/client/pages/sistema/permissoes/components/group-subject_form.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GrupoSujeitoForm> = {
  component: GrupoSujeitoForm,
}

export default meta
type Story = StoryObj<typeof GrupoSujeitoForm>

export const Form: Story = {
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
