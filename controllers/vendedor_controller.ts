import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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

function vendedorControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TVendedorFields, TVendedorKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const vendedorController = vendedorControllerFactory(dbPlano, CadVen)