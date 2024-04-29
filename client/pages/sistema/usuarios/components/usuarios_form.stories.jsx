import { usuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.mjs'
import { UsuarioForm } from './usuarios_form.jsx'

const meta = {
  component: UsuarioForm,
}

export default meta

export const Form = {
  render: () => <UsuarioForm store={usuarioStore} />,
}
