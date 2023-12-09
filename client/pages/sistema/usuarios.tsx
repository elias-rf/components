import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { UsuarioForm } from '@/client/features/sistema/usuario/usuario_form.js'
import { UsuarioHead } from '@/client/features/sistema/usuario/usuario_head.js'
import { usuarioStore } from '@/client/features/sistema/usuario/usuario_store.js'
import { UsuarioTable } from '@/client/features/sistema/usuario/usuario_table.js'
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
        title="Preços"
      />
      <div data-name="Usuario">
        <UsuarioHead />
        <UsuarioTable />
        {status !== 'none' ? (
          <div className="p-1 mb-2 border border-gray-300">
            <UsuarioForm />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
