import { usuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'
import { UsuarioTable } from './usuarios_table.js'

export default {
  title: 'features/usuario/usuario',
}

export const Default: Story = () => {
  return (
    <>
      <div className="p-2">
        <UsuarioTable
          store={usuarioStore}
          auth={authStore}
        />
      </div>
    </>
  )
}
