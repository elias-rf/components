import { useQuery } from '@tanstack/react-query'
import { Button } from '../../../components/button/button.jsx'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
import { usuarioStore } from '../../../pages/sistema/usuarios/components/usuario.store.mjs'
import { UsuarioForm } from '../../../pages/sistema/usuarios/components/usuarios_form.jsx'
import { UsuarioTable } from '../../../pages/sistema/usuarios/components/usuarios_table.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

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
      <div className="flex flex-col h-full px-2">
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
        <div className="flex-auto h-64 border border-gray-400 dark:border-gray-500">
          <UsuarioTable store={usuarioStore} />
        </div>
        {status !== 'none' ? (
          <div className="flex-auto max-h-56">
            <UsuarioForm store={usuarioStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
