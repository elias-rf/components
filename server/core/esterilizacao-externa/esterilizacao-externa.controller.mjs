import { esterilizacaoExternaUseCases } from '../../core/esterilizacao-externa/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = esterilizacaoExternaUseCases(dataSource)

export const esterilizacaoExternaController = {
  esterilizacaoExterna_list: useCases.list,
  esterilizacaoExterna_read: useCases.read,
  esterilizacaoExterna_count: useCases.count,
  esterilizacaoExterna_update: useCases.update,
  esterilizacaoExterna_create: useCases.create,
  esterilizacaoExterna_del: useCases.del,
  esterilizacaoExterna_diario: useCases.diario,
  esterilizacaoExterna_mensal: useCases.mensal,
  esterilizacaoExterna_modelo: useCases.modelo,
  esterilizacaoExterna_produto: useCases.produto,
}
