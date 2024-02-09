import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { groupSubjectStore } from '@/client/pages/sistema/permissoes/components/group-subject.store.js'
import { GroupSubjectForm } from '@/client/pages/sistema/permissoes/components/group-subject_form.js'
import { GroupSubjectTable } from '@/client/pages/sistema/permissoes/components/group-subject_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export default function GroupSubject() {
  const status = groupSubjectStore.state.use.status()
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.group_ids || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          title="Permissões"
        >
          <Button
            size={'sm'}
            onClick={groupSubjectStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <GroupSubjectTable store={groupSubjectStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-56 flex-auto">
            <GroupSubjectForm store={groupSubjectStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
