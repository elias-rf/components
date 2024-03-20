import { estoqueDataSource } from '@/data/plano/estoque/estoque.data-source.js'
import { nfEntradaItemDataSource } from '@/data/plano/nf-entrada-item/nf-entrada-item.data-source.js'
import { nfEntradaLogDataSource } from '@/data/plano/nf-entrada-log/nf-entrada-log.data-source.js'
import { nfSaidaLoteDataSource } from '@/data/plano/nf-saida-lote/nf-saida-lote.data-source.js'
import { produtoControleDataSource } from '@/data/plano/produto-controle/produto-controle.data-source.js'
import { clienteDataSource } from './cliente/cliente.data-source.js'
import { fornecedorDataSource } from './fornecedor/fornecedor.data-source.js'
import { nfEntradaControleDataSource } from './nf-entrada-controle/nf-entrada-controle.data-source.js'
import { nfEntradaDataSource } from './nf-entrada/nf-entrada.data-source.js'
import { nfSaidaItemDataSource } from './nf-saida-item/nf-saida-item.data-source.js'
import { nfSaidaDataSource } from './nf-saida/nf-saida.data-source.js'
import { planoDb } from './plano.db.js'
import { produtoDataSource } from './produto/produto.data-source.js'

export const planoDataSource = {
  ds: planoDb,
  cliente: { ...clienteDataSource(planoDb) },
  estoque: { ...estoqueDataSource(planoDb) },
  fornecedor: { ...fornecedorDataSource(planoDb) },
  nfEntrada: { ...nfEntradaDataSource(planoDb) },
  nfEntradaControle: { ...nfEntradaControleDataSource(planoDb) },
  nfEntradaItem: { ...nfEntradaItemDataSource(planoDb) },
  nfEntradaLog: { ...nfEntradaLogDataSource(planoDb) },
  nfSaida: { ...nfSaidaDataSource(planoDb) },
  nfSaidaItem: { ...nfSaidaItemDataSource(planoDb) },
  nfSaidaLote: { ...nfSaidaLoteDataSource(planoDb) },
  produto: { ...produtoDataSource(planoDb) },
  produtoControle: { ...produtoControleDataSource(planoDb) },
}

export type TPlanoDataSource = typeof planoDataSource
