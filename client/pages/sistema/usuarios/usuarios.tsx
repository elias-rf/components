import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { usuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import { UsuarioForm } from '@/client/pages/sistema/usuarios/components/usuarios_form.js'
import { UsuarioTable } from '@/client/pages/sistema/usuarios/components/usuarios_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Usuarios() {
  const status = usuarioStore.state.use.status()
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          className="flex-none print:hidden"
          title="Usuários"
        >
          <Button
            size={'sm'}
            onClick={usuarioStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <UsuarioTable store={usuarioStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-56 flex-auto">
            <UsuarioForm store={usuarioStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
