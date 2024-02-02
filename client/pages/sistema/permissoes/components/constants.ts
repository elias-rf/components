import { TPermissions } from '@/types/index.js'

export const KEYNAME = 'groupSubject'

export const permissions: TPermissions = {
  PERMISSAO: {
    key: 'groupSubject_permissao',
    description: 'Atribuir permissões',
  },
  EDIT: { key: 'group_subject_edit', description: 'Alterar ramais' },
  CREATE: { key: 'group_subject_create', description: 'Lançar novos ramais' },
}
