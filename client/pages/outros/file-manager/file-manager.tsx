import { FormHead } from '@/client/components/ui-old/form-head.js'
import { fileManagerStore } from '@/client/pages/outros/file-manager/file-manager_store.js'
import { FileManagerTable } from '@/client/pages/outros/file-manager/file-manager_table.js'
import { can } from '@/client/store/auth_store.js'

const permissions = {
  outros_file_manager_permissao: 'Atribuir permissões',
  outros_file_manager_edit: 'Alterar arquivos',
  outros_file_manager_create: 'Lançar novos arquivos',
}
type TCan = (name: keyof typeof permissions) => boolean

/**
 * Agenda de Ramais
 */
export default function FileManager() {
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
