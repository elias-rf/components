import { usuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import type { Meta, StoryObj } from '@storybook/react'
import { UsuarioTable } from './usuarios_table.js'

const meta: Meta<typeof UsuarioTable> = {
  component: UsuarioTable,
}

export default meta
type Story = StoryObj<typeof UsuarioTable>

export const Default: Story = {
  render: () => (
    <>
      <div className="p-2">
        <UsuarioTable store={usuarioStore} />
      </div>
    </>
  ),
}
