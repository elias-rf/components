import { TEtiquetaExternaController } from '@/core/etiqueta-externa/etiqueta-externa_controller.js'
import { TOrdemProducaoOperacaoController } from '@/core/ordem-producao-operacao/ordem-producao-operacao_controller.js'
import { controle } from '@/core/ordem-producao/use-cases/controle.js'
import { dataFabricacao } from '@/core/ordem-producao/use-cases/data-fabricacao.js'
import { dataValidade } from '@/core/ordem-producao/use-cases/data-validade.js'
import { ehControleValido } from '@/core/ordem-producao/use-cases/eh-controle-valido.js'
import { etiquetaExterna } from '@/core/ordem-producao/use-cases/etiqueta-externa.js'
import { fromControle } from '@/core/ordem-producao/use-cases/from-controle.js'
import { produtoItem } from '@/core/ordem-producao/use-cases/produto-item.js'
import { produtoPlano } from '@/core/ordem-producao/use-cases/produto-plano.js'
import { TProdutoItemController } from '@/core/produto-item/produto-item_controller.js'
import { TDataSource } from '@/data/index.js'
import { list } from './list.js'
import { read } from './read.js'

export const ordemProducaoUseCases = (
  dataSource: TDataSource,
  {
    ordemProducaoOperacaoController,
    etiquetaExternaController,
    produtoItemController,
  }: {
    ordemProducaoOperacaoController: TOrdemProducaoOperacaoController
    etiquetaExternaController: TEtiquetaExternaController
    produtoItemController: TProdutoItemController
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
