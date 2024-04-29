import { useQuery } from '@tanstack/react-query'
import { Button } from '../../../components_/button/button.jsx'
import { Can } from '../../../components_/can.jsx'
import { FormHead } from '../../../components_/form-head/form-head.jsx'
import { AgendaTelefoneForm } from '../../../pages/outros/agenda/components/agenda.form.jsx'
import { agendaTelefoneStore } from '../../../pages/outros/agenda/components/agenda.store.mjs'
import { AgendaTelefoneTable } from '../../../pages/outros/agenda/components/agenda.table.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const status = agendaTelefoneStore.state.use.status()
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={true}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          title="Agenda de Ramais"
        >
          <Button
            size={'sm'}
            onClick={agendaTelefoneStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <AgendaTelefoneTable store={agendaTelefoneStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-56 flex-auto">
            <AgendaTelefoneForm store={agendaTelefoneStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
