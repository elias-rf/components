import { planoDb } from '@/data/plano/plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const CadVen = {
  database: 'plano',
  table: 'CadVen',
  primary: ['CdVendedor'] as const,
  fields: [
    'CdVendedor',
    'NmVendedor',
    'Endereco',
    'Cidade',
    'Uf',
    'CPF',
    'Identidade',
    'Telefone',
    'FgControle',
    'Meta',
    'Venda',
    'ComissaoAV',
    'ComissaoPZ',
    'DtUltAlteracao',
    'Cargo',
    'PercLimiteComissao',
    'FgAtivo',
    'Bairro',
    'TelefoneAdicional',
    'Email',
    'PercComissaoVarejoVista',
    'PercComissaoAtacadoVista',
    'PercComissaoVarejoPrazo',
    'PercComissaoAtacadoPrazo',
    'Cep',
    'NmFantasia',
    'FgFuncionarioOS',
    'FgTecnicoOS',
    'IdWeb',
  ] as const,
}

export type TVendedorFields = (typeof CadVen.fields)[number]
export type TVendedorKeys = (typeof CadVen.primary)[number]

function vendedorControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TVendedorFields, TVendedorKeys>(db, schema)
  return {
    vendedor_list: orm.rpc.list,
    vendedor_read: orm.rpc.read,
    vendedor_count: orm.rpc.count,
    vendedor_update: orm.rpc.update,
    vendedor_create: orm.rpc.create,
    vendedor_del: orm.rpc.del,
    vendedor_increment: orm.rpc.increment,
  }
}

export const vendedorController = vendedorControllerFactory(planoDb, CadVen)
