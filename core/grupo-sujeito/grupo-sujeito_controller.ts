import { grupoSujeitoUseCases } from '@/core/grupo-sujeito/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = grupoSujeitoUseCases(dataSource)

export const grupoSujeitoController = {
  grupoSujeito_list: useCases.list,
  grupoSujeito_read: useCases.read,
  grupoSujeito_count: useCases.count,
  grupoSujeito_update: useCases.update,
  grupoSujeito_create: useCases.create,
  grupoSujeito_del: useCases.del,
  grupoSujeito_listPermissions: useCases.listPermissions,
  grupoSujeito_can: useCases.can,
}
