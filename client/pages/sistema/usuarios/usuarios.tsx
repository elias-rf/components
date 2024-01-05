import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { usuarioStore } from '@/client/pages/sistema/usuarios/components/usuario_store.js'
import { UsuarioForm } from '@/client/pages/sistema/usuarios/usuarios_form.js'
import { UsuarioTable } from '@/client/pages/sistema/usuarios/usuarios_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'

const permissions = {
  sistema_usuarios_permissao: 'Atribuir permissões de preços',
  sistema_usuarios_read: 'Calcular preços',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Usuarios() {
  const status = useSnapshot(usuarioStore.state).status

  return (
    <Can can={authStore.can('sistema_usuarios_read')}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          editPermissions={authStore.can('sistema_usuarios_permissao')}
          permissions={permissions}
          className="flex-none print:hidden"
        >
          Usuários
        </FormHead>
        <UsuarioTable store={usuarioStore} />
        {status !== 'none' ? (
          <div className="mb-2 border border-gray-300 p-1">
            <UsuarioForm store={usuarioStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
