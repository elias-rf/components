import { usuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import type { Meta, StoryObj } from '@storybook/react'
import { UsuarioForm } from './usuarios_form.js'

const meta: Meta<typeof UsuarioForm> = {
  component: UsuarioForm,
}

export default meta
type Story = StoryObj<typeof UsuarioForm>

export const Form: Story = {
  render: () => <UsuarioForm store={usuarioStore} />,
}
