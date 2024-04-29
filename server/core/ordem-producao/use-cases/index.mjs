import { controle } from '../../../core/ordem-producao/use-cases/controle.mjs'
import { dataFabricacao } from '../../../core/ordem-producao/use-cases/data-fabricacao.mjs'
import { dataValidade } from '../../../core/ordem-producao/use-cases/data-validade.mjs'
import { ehControleValido } from '../../../core/ordem-producao/use-cases/eh-controle-valido.mjs'
import { etiquetaExterna } from '../../../core/ordem-producao/use-cases/etiqueta-externa.mjs'
import { fromControle } from '../../../core/ordem-producao/use-cases/from-controle.mjs'
import { produtoItem } from '../../../core/ordem-producao/use-cases/produto-item.mjs'
import { produtoPlano } from '../../../core/ordem-producao/use-cases/produto-plano.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'

export const ordemProducaoUseCases = (
  dataSource,
  {
    ordemProducaoOperacaoController,
    etiquetaExternaController,
    produtoItemController,
  }
) => ({
  controle: controle(dataSource),
  dataFabricacao: dataFabricacao({ ordemProducaoOperacaoController }),
  dataValidade: dataValidade({ ordemProducaoOperacaoController }),
  ehControleValido: ehControleValido(),
  etiquetaExterna: etiquetaExterna({ etiquetaExternaController }),
  fromControle: fromControle(),
  list: list(dataSource),
  produtoItem: produtoItem(dataSource, { produtoItemController }),
  produtoPlano: produtoPlano(dataSource, { produtoItemController }),
  read: read(dataSource),
})
