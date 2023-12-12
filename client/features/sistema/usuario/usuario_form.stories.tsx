import { usuarioStore } from '@/client/features/sistema/usuario/usuario_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'
import { UsuarioForm } from './usuario_form.js'

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
