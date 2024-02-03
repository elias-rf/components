import { FormHead } from '@/client/components/form-head/form-head.js'
import { fileManagerStore } from '@/client/pages/outros/file-manager/components/file-manager_store.js'
import { FileManagerTable } from '@/client/pages/outros/file-manager/components/file-manager_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { permissions } from './components/constants.js'

/**
 * Agenda de Ramais
 */
export default function FileManager() {
  return (
    <div data-name="FileManager">
      <FormHead
        permissions={permissions}
        editPermissions={authStore.can('outros_file_manager_permissao')}
        title="Gestor de arquivos"
      ></FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <FileManagerTable />
      </div>
    </div>
  )
}
