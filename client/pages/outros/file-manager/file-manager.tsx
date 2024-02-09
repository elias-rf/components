import { FormHead } from '@/client/components/form-head/form-head.js'
import { FileManagerTable } from '@/client/pages/outros/file-manager/components/file-manager_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

/**
 * Agenda de Ramais
 */
export default function FileManager() {
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.group_ids || '', permissionsList),
  })

  return (
    <div data-name="FileManager">
      <FormHead
        permissions={permissions}
        editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
        title="Gestor de arquivos"
      ></FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <FileManagerTable />
      </div>
    </div>
  )
}
