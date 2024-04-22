import GrupoSujeito from '@/client/pages/sistema/permissoes/grupo-sujeito.js'
import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GrupoSujeito> = {
  component: GrupoSujeito,
}

export default meta
type Story = StoryObj<typeof GrupoSujeito>

authStore.state.getState().currentUser.grupoIds = '0'

export const Default: Story = {
  render: () => (
    <>
      <GrupoSujeito />
    </>
  ),
}
