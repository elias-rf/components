import { esterilizacaoInternaUseCases } from '../../core/esterilizacao-interna/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = esterilizacaoInternaUseCases(dataSource)

export const esterilizacaoInternaController = {
  esterilizacaoInterna_list: useCases.list,
  esterilizacaoInterna_read: useCases.read,
  esterilizacaoInterna_count: useCases.count,
  esterilizacaoInterna_update: useCases.update,
  esterilizacaoInterna_create: useCases.create,
  esterilizacaoInterna_del: useCases.del,
  esterilizacaoInterna_diario: useCases.diario,
  esterilizacaoInterna_mensal: useCases.mensal,
  esterilizacaoInterna_modelo: useCases.modelo,
  esterilizacaoInterna_produto: useCases.produto,
}
