import { TPermissions } from '@/types/index.js'

export const KEYNAME = 'grupoSujeito'

export const permissions: TPermissions = {
  PERMISSAO: {
    key: 'grupoSujeito_permissao',
    description: 'Atribuir permissões',
  },
  READ: { key: 'grupoSujeito_read', description: 'Ver permissões' },
  EDIT: { key: 'grupoSujeito_edit', description: 'Alterar permissões' },
  CREATE: {
    key: 'grupoSujeito_create',
    description: 'Lançar novas permissões',
  },
}
