import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const tbl_Produto: TSchema = {
  table: 'tbl_Produto',
  primary: ['kProduto'] as const,
  fields: [
    'kProduto',
    'fkCategoria',
    'NomeComercial',
    'NomeInternacional',
    'BarCode',
    'Fabricante',
    'OBS',
    'DescricaoTecnica',
    'DescricaoGenerica',
    'CST',
    'Unidade',
    'GrupoCredito',
    'PesoBruto',
    'VlrMin',
    'Moeda',
    'NBM',
    'FOB',
    'Qtd',
    'Diametro',
    'DiametroTotal',
    'Furo',
    'Separacao',
    'PrazoAquisicao',
    'fkNCM',
    'fkUnidade',
    'ForaDeLinha',
    'Auditoria',
    'ItemEstoque',
    'fkLinhaDeProducao',
    'EsterilizacaoETO',
    'IsCatalogo',
    'ValorCusto',
    'TaxaIPI',
    'PRO_Ferrara',
    'fkSubCategoria',
    'CategoriaPREVISA',
    'OrigemCST',
  ],
}

export type TProdutoFields = (typeof tbl_Produto.fields)[number]
export type TProdutoKeys = (typeof tbl_Produto.primary)[number]

function produtoControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TProdutoFields, TProdutoKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const produtoController = produtoControllerFactory(
  dbOftalmo,
  tbl_Produto
)
