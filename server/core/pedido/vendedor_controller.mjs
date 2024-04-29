import { planoDb } from '../../data/plano/plano.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const CadVen = {
  database: 'plano',
  table: 'CadVen',
  primary: ['CdVendedor'],
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
  ],
}

function vendedorControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
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
