import { useQuery } from '@tanstack/react-query'
import { Button } from '../../../components/button/button.jsx'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
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
      <div className="flex flex-col h-full px-2">
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
        <div className="flex-auto h-64 border border-gray-400 dark:border-gray-500">
          <AgendaTelefoneTable store={agendaTelefoneStore} />
        </div>
        {status !== 'none' ? (
          <div className="flex-auto max-h-56">
            <AgendaTelefoneForm store={agendaTelefoneStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
