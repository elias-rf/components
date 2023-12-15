import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { UsuarioForm } from '@/client/pages/sistema/usuarios/usuarios_form.js'
import { usuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { UsuarioTable } from '@/client/pages/sistema/usuarios/usuarios_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  sistema_usuarios_permissao: 'Atribuir permissões de preços',
  sistema_usuarios_read: 'Calcular preços',
}

export default function Usuarios() {
  const status = usuarioStore.use.status()
  const can = authStore.use.can()

  return (
    <Can can={can('sistema_usuarios_read')}>
      <FormHead
        editPermissions={can('sistema_usuarios_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Usuários
      </FormHead>
      <UsuarioTable
        store={usuarioStore}
        auth={authStore}
      />
      {status !== 'none' ? (
        <div className="mb-2 border border-gray-300 p-1">
          <UsuarioForm
            store={usuarioStore}
            auth={authStore}
          />
        </div>
      ) : null}
    </Can>
  )
}
