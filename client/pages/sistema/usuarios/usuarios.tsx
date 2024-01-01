import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { UsuarioForm } from '@/client/pages/sistema/usuarios/usuarios_form.js'
import { usuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { UsuarioTable } from '@/client/pages/sistema/usuarios/usuarios_table.js'
import { can } from '@/client/store/auth_store.js'

const permissions = {
  sistema_usuarios_permissao: 'Atribuir permissões de preços',
  sistema_usuarios_read: 'Calcular preços',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Usuarios() {
  const status = usuarioStore.use.status()

  return (
    <Can can={can('sistema_usuarios_read')}>
      <FormHead
        editPermissions={can('sistema_usuarios_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Usuários
      </FormHead>
      <UsuarioTable store={usuarioStore} />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <UsuarioForm store={usuarioStore} />
        </div>
      ) : null}
    </Can>
  )
}
