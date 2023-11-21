import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const fornecedorSchema: TSchema = {
  table: 'CadFor',
  primary: ['CdFornecedor'] as const,
  fields: [
    'CdFornecedor',
    'RzSocial',
    'Endereco',
    'Bairro',
    'Cidade',
    'Uf',
    'Cep',
    'CGC',
    'InscEst',
    'EMail',
    'Telefone',
    'Fax',
    'CdTipo',
    'CdSubTipo',
    'ReduMargemSub',
    'DtUltCompra',
    'DtUltAlteracao',
    'ModeloAtualizacao',
    'CdGrupo',
    'ModeloPedido',
    'CdIdentificacao',
    'VlMoeda',
    'CdCentroCustoPadrao',
    'IdCondPagamento',
    'Observacao',
    'DirTrocaArquivo',
    'NmFantasia',
    'Classificacao',
    'FgCotacao',
    'FgSigiloso',
    'NumContaDespesa',
    'FgAtivo',
    'FgGNRE',
    'NumEndereco',
    'Complemento',
    'InscSuframa',
    'FgTipoCustoDRE',
    'CdPais',
  ] as const,
}

export type TFornecedorFields = (typeof fornecedorSchema.fields)[number]
export type TFornecedorKeys = (typeof fornecedorSchema.primary)[number]

function fornecedorControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TFornecedorFields, TFornecedorKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const fornecedorController = fornecedorControllerFactory(
  dbPlano,
  fornecedorSchema
)
