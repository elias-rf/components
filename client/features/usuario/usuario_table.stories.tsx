import { Story } from '@ladle/react'
import { UsuarioTable } from './usuario_table'

export default {
  title: 'features/usuario/usuario',
}

export const Default: Story = () => {
  return (
    <>
      <div className="p-2">
        <UsuarioTable />
      </div>
    </>
  )
}
