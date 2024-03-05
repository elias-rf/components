import { JsonView } from '@/client/components/json-view/json-view.js'
import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'
import { usuarioStore } from './components/usuario.store.js'
import Usuarios from './usuarios.js'

const meta: Meta<typeof Usuarios> = {
  component: Usuarios,
}

export default meta
type Story = StoryObj<typeof Usuarios>

authStore.state.getState().currentUser.grupoIds = '0'

export const Default: Story = {
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
