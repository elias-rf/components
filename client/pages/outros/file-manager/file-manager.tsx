import { FormHead } from '@/client/components/ui/form-head.js'
import { fileManagerStore } from '@/client/pages/outros/file-manager/file-manager_store.js'
import { FileManagerTable } from '@/client/pages/outros/file-manager/file-manager_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  outros_file_manager_permissao: 'Atribuir permissões',
  outros_file_manager_edit: 'Alterar arquivos',
  outros_file_manager_create: 'Lançar novos arquivos',
}

/**
 * Agenda de Ramais
 */
export default function FileManager() {
  const can = authStore.use.can()

  return (
    <div data-name="FileManager">
      <FormHead
        permissions={permissions}
        editPermissions={can('outros_file_manager_permissao')}
      >
        Gestor de arquivos
      </FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <FileManagerTable />
      </div>
    </div>
  )
}
