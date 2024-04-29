import { clienteDataSource } from './cliente/cliente.data-source.mjs'
import { estoqueDataSource } from './estoque/estoque.data-source.mjs'
import { fornecedorDataSource } from './fornecedor/fornecedor.data-source.mjs'
import { nfEntradaControleDataSource } from './nf-entrada-controle/nf-entrada-controle.data-source.mjs'
import { nfEntradaItemDataSource } from './nf-entrada-item/nf-entrada-item.data-source.mjs'
import { nfEntradaLogDataSource } from './nf-entrada-log/nf-entrada-log.data-source.mjs'
import { nfEntradaDataSource } from './nf-entrada/nf-entrada.data-source.mjs'
import { nfSaidaItemDataSource } from './nf-saida-item/nf-saida-item.data-source.mjs'
import { nfSaidaLoteDataSource } from './nf-saida-lote/nf-saida-lote.data-source.mjs'
import { nfSaidaDataSource } from './nf-saida/nf-saida.data-source.mjs'
import { planoDb } from './plano.db.mjs'
import { produtoControleDataSource } from './produto-controle/produto-controle.data-source.mjs'
import { produtoDataSource } from './produto/produto.data-source.mjs'
import { receberDataSource } from './receber/receber.data-source.mjs'

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
  receber: { ...receberDataSource(planoDb) },
}
