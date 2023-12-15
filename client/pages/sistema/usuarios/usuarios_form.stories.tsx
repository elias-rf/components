import { usuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'
import { UsuarioForm } from './usuarios_form.js'

export default {
  title: 'features/usuario/usuario_form',
}

export const Form: Story = () => {
  return (
    <UsuarioForm
      store={usuarioStore}
      auth={authStore}
    />
  )
}
